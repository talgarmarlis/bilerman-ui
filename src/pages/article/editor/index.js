import React from 'react'
import EditorJs from 'react-editor-js'
import { Progress } from 'antd'
import { draftService } from 'services'
import PublicationForm from './form'
import EDITOR_JS_TOOLS from './tools'
import style from './style.module.scss'

class Editor extends React.Component {
  state = {
    draft: {},
    content: {},
    progress: 0,
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props
    if (params.draftId) this.loadDraft(params.draftId)
  }

  loadDraft = draftId => {
    draftService.getDraftById(draftId).then(response => {
      const draft = response.data
      this.setState({ draft, content: JSON.parse(draft.body), loaded: true })
    })
  }

  onTitleChange = e => {
    const { draft } = this.state
    draft.title = e.target.value
    this.setState({ draft })
    this.handleUpdate()
  }

  onEdit = (api, content) => {
    const { draft } = this.state
    draft.subtitle = this.getSubtitle(content)
    this.setState({ content })
    this.handleUpdate()
  }

  handleUpdate = () => {
    const { titleTimeout } = this.state
    clearTimeout(titleTimeout)
    const timeout = setTimeout(() => {
      this.save()
    }, 2000)
    this.setState({ titleTimeout: timeout })
    this.handleProgress()
  }

  handleImageChange = imageId => {
    const { draft } = this.state
    draft.imageId = imageId
    this.setState({ draft })
    this.save()
  }

  getSubtitle = content => {
    const { blocks } = content
    for (let i = 0; i < blocks.length; i += 1) {
      const item = blocks[i]
      if (item.type === 'paragraph') {
        const { text } = item.data
        if (text.length > 500) {
          const sub = text.slice(0, 500)
          return sub.slice(0, sub.lastIndexOf(' '))
        }
        return text
      }
    }
    return ''
  }

  handleProgress = () => {
    const { progressInterval, progressTimeout } = this.state
    clearTimeout(progressTimeout)
    clearInterval(progressInterval)
    this.setState({ progress: 0 })

    const timeout = setTimeout(() => {
      this.triggerProgressBar()
    }, 500)
    this.setState({ progressTimeout: timeout })
  }

  triggerProgressBar = () => {
    const interval = setInterval(() => {
      const { progress } = this.state
      if (progress < 99) this.setState({ progress: progress + 1 })
    }, 15)
    this.setState({ progressInterval: interval })
  }

  save = () => {
    const { draft, content } = this.state
    if (draft.title || draft.body) {
      draft.body = JSON.stringify(content)
      draftService.saveDraft(draft).then(response => {
        this.setState({ draft: response.data, progress: 100 })
      })
    }
  }

  toggleForm = () => {
    this.setState(prevState => ({ formStatus: !prevState.formStatus }))
  }

  render() {
    const { draft, content, loaded, formStatus, progress } = this.state
    console.log(content)
    return (
      <div>
        <Progress
          className={style.progress}
          percent={progress}
          showInfo={false}
          strokeWidth={1.2}
          strokeColor={progress < 100 ? '#354458' : '#EB7260'}
          trailColor="white"
        />
        {draft.id && (
          <PublicationForm
            enabled={formStatus}
            toggleForm={this.toggleForm}
            draft={draft}
            handleImage={this.handleImageChange}
          />
        )}
        <div className="card border-0 shadow-none">
          <div className="card-body">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className={style.wrapper}>
                  <input
                    type="text"
                    className={style.searchInput}
                    id="editor-title"
                    placeholder="Your title . ."
                    value={draft.title}
                    onChange={this.onTitleChange}
                  />
                </div>
              </div>
              <div className="col-xl-8 offset-xl-2 border-default">
                {loaded && (
                  <EditorJs data={content} tools={EDITOR_JS_TOOLS} onChange={this.onEdit} />
                )}
                {!loaded && (
                  <EditorJs data={content} tools={EDITOR_JS_TOOLS} onChange={this.onEdit} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Editor
