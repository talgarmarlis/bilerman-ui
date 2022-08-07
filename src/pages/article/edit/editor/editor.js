import React, { useEffect, useState } from "react";
import { injectIntl } from 'react-intl'
import { createReactEditorJS } from 'react-editor-js'
import { Input } from "antd";
import EDITOR_JS_TOOLS from './tools'
import style from '../style.module.scss'

const ReactEditorJS = createReactEditorJS()

const Editor  = ({ saveDraft, defaultTitle, defaultEditorData, intl: { formatMessage }}) => {

  const [titleTimeout, setTitleTimeout] = useState(0);
  const [title, setTitle] = useState(defaultTitle);
  const [content, setContent] = useState({});
  const editorCore = React.useRef(null)

  const initialize = React.useCallback((instance) => {
    editorCore.current = instance
  }, [])

  useEffect(() => {
    if(content.title || content.body) saveDraft(content)
  }, [content])

  const onTitleChange = e => {
    const {value} = e.target
    setTitle(value)
    clearTimeout(titleTimeout)
    const timeout = setTimeout(() => {
      setContent(prevState => ({...prevState, title: value }))
    }, 2000)
    setTitleTimeout(timeout)
  }

  const handleSave = React.useCallback(async () => {
    const editorData = await editorCore.current.save();
    setContent(prevState => ({...prevState, preview: getPreview(editorData), subtitle: getSubtitle(editorData), body: JSON.stringify(editorData) }))
  }, [])

  const getPreview = (data) => {
    const { blocks } = data
    let textContent = ''
    for (let i = 0; i < blocks.length; i += 1) {
      const item = blocks[i]
      if (item.type === 'paragraph' || item.type === 'header') {
        const { text } = item.data
        textContent += ` ${getTextContent(text)}`
      }
      else if (item.type === 'list') {
        const { items } = item.data
        for(let j = 0; j < items.length; j += 1) {
          textContent += ` ${getTextContent(items[j])}`
        }
      }

      if (textContent.length > 500) {
        const sub = textContent.slice(0, 500)
        return sub.slice(0, sub.lastIndexOf(' '))
      }
    }
    return textContent
  }

  const getSubtitle = (data) => {
    const { blocks } = data
    for (let i = 0; i < blocks.length; i += 1) {
      const item = blocks[i]
      if (item.type === 'paragraph' || item.type === 'header') {
        const { text } = item.data
        const textContent = ` ${getTextContent(text)}`
        if (textContent.length > 500) {
          const sub = textContent.slice(0, 500)
          return sub.slice(0, sub.lastIndexOf(' '))
        }
        return textContent
      }
    }
    return 'textContent'
  }

  const getTextContent = (s) => {
    const span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  }

  return (
    <div>
      <div className="container-xl">
        <div className="card border-0 shadow-none">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className={style.wrapper}>
                  <Input.TextArea
                    style={{fontSize:"32px", fontFamily: "CustomSerif,Georgia,Cambria,'Times New Roman',serif", padding:"5px 0px", resize:"none"}}
                    placeholder={formatMessage({ id: 'article.editor.index.yourTitle' })}
                    autoSize={{ minRows: 1, maxRows: 5 }}
                    bordered={false}
                    value={title}
                    onChange={onTitleChange}
                  />
                </div>
              </div>
              <div className="col-12" style={{fontSize:"18px", fontFamily: "CustomSerif,Georgia,Cambria,'Times New Roman',serif"}}>
                <ReactEditorJS
                  defaultValue={defaultEditorData}
                  onInitialize={initialize}
                  onChange={handleSave}
                  tools={EDITOR_JS_TOOLS}
                  placeholder={formatMessage({ id: 'article.editor.index.yourStory' })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default injectIntl(Editor)
