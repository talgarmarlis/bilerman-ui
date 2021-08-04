import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Radio, Tooltip, Form, Input, Upload, Select, Button, Switch, Collapse} from 'antd'
import { CameraOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons'
import { articleService, imageService } from 'services'
import classNames from 'classnames'
import { history } from 'index'
import config from 'config'
import style from './style.module.scss'

const { Dragger } = Upload
const { TextArea } = Input
const { Panel } = Collapse

class PublicationForm extends React.Component {
  state = {
    tags: [],
    languageId: 1,
    isCoverVisible: true,
    isPublic: true,
    isListed: true,
  }

  componentWillReceiveProps() {
    const { draft } = this.props
    if (draft.published) {
      const { article } = draft
      this.setState({
        draftId: draft.id,
        title: article.title,
        subtitle: article.subtitle,
        imageId: draft.imageId,
        languageId: article.languageId,
        tags: article.tags.map(tag => tag.name),
        isCoverVisible: article.isCoverVisible,
        isPublic: article.isPublic,
        isListed: article.isListed,
      })
    } else {
      this.setState({
        draftId: draft.id,
        title: draft.title,
        subtitle: draft.subtitle,
        imageId: draft.imageId,
      })
    }
  }

  onFinish = values => {
    const { draftId } = this.state
    this.setState({ loading: true })
    values.draftId = draftId
    console.log(values)
    articleService.publishDraft(values).then(result => {
      this.setState({ loading: false })
      history.push(`/article/details/${result.data.id}`)
    })
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  handleFileChange = file => {
    const { handleImage } = this.props
    imageService.upload("article", file).then(result => {
      console.log(result)
      handleImage(result.data)
    })
  }

  removeImage = () => {
    const { handleImage } = this.props
    this.setState({ imageId: null })
    handleImage(null)
  }

  render() {
    const { enabled, toggleForm, intl: { formatMessage } } = this.props
    const { tags, title, subtitle, languageId, loading, imageId, isCoverVisible, isPublic, isListed } = this.state

    return (
      <div>
        <div
          className={classNames(style.cui__sidebar, {
            [style.cui__sidebar__toggled]: enabled,
          })}
        >
          {enabled && (
            <PerfectScrollbar>
              <div className={style.cui__sidebar__inner}>
                <Button
                  type="default"
                  shape="circle"
                  icon={<CloseOutlined />}
                  size="small"
                  className={style.cui__sidebar__close}
                  onClick={toggleForm}
                />
                <h5>
                  <strong>
                    <FormattedMessage id="article.editor.form.publishDraft" />
                  </strong>
                </h5>
                <div className="cui__utils__line" style={{ marginTop: 25, marginBottom: 30 }} />
                <Form
                  hideRequiredMark
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
                  className="mb-4"
                  labelAlign="left"
                >
                  <div className={style.cui__sidebar__type}>
                    <div className={style.cui__sidebar__type__title}>
                      <span><FormattedMessage id="article.editor.form.preview" /></span>
                    </div>
                    {imageId && (
                      <div key={imageId} className={style.item}>
                        <div className={style.itemContent}>
                          <div className={style.itemControl}>
                            <div className={style.itemControlContainer}>
                              <Button.Group size="default">
                                <Button onClick={this.removeImage}>
                                  <DeleteOutlined />
                                </Button>
                              </Button.Group>
                            </div>
                          </div>
                          <img src={`${config.apiUrl}/images/article/${imageId}`} alt={title} />
                        </div>
                        <Form.Item
                          name="isCoverVisible"
                          initialValue={isCoverVisible}
                          valuePropName="checked"
                          label={formatMessage({ id: 'article.editor.form.isCoverVisible' })}
                        >
                          <Switch className="component-col d-flex ml-auto" />
                        </Form.Item>
                      </div>
                    )}
                    {!imageId && (
                      <Dragger
                        multiple={false}
                        customRequest={e => this.handleFileChange(e.file)}
                        showUploadList={false}
                        className="mb-4"
                      >
                        <p className="ant-upload-drag-icon">
                          <CameraOutlined />
                        </p>
                        <p className="ant-upload-text">
                          <FormattedMessage id="article.editor.form.image" />
                        </p>
                        <p className="ant-upload-hint">
                          <FormattedMessage id="article.editor.form.imageQuality" />
                        </p>
                      </Dragger>
                    )}
                    <Form.Item
                      name="title"
                      initialValue={title}
                      rules={[{ required: true, message: formatMessage({ id: 'article.editor.form.inputTitle' }) }]}
                    >
                      <Input placeholder={formatMessage({ id: 'article.editor.form.title' })} />
                    </Form.Item>
                    <Form.Item
                      name="subtitle"
                      initialValue={subtitle}
                      rules={[{ required: true, message: formatMessage({ id: 'article.editor.form.inputSubtitle' }) }]}
                    >
                      <TextArea placeholder={formatMessage({ id: 'article.editor.form.subtitle' })} />
                    </Form.Item>
                    <strong><FormattedMessage id="article.editor.form.note" /> </strong>
                    <span className="text-muted">
                      <FormattedMessage id="article.editor.form.noteMessage" />
                    </span>
                  </div>
                  <div className={style.cui__sidebar__type}>
                    <div className={style.cui__sidebar__type__title}>
                      <span>
                        <FormattedMessage id="article.editor.form.language" />
                      </span>
                    </div>
                    <Form.Item
                      className="mb-2"
                      name="languageId"
                      initialValue={languageId}
                      rules={[{ required: true, message: formatMessage({ id: 'article.editor.form.selectLanguage' }) }]}
                    >
                      <Radio.Group>
                        <div className="row">
                          <div className="col-4 mb-2">
                            <Radio value={1}>
                              <span role="img" aria-label="Кыргызча" className="mr-2">
                                🇰🇬
                              </span>
                              Кыргызча
                            </Radio>
                          </div>
                          <div className="col-4 mb-2">
                            <Radio value={2}>
                              <span role="img" aria-label="Кыргызча" className="mr-2">
                                🇷🇺
                              </span>
                              Русский
                            </Radio>
                          </div>
                          <div className="col-4 mb-2">
                            <Radio value={3}>
                              <span role="img" aria-label="English" className="mr-2">
                                🇬🇧
                              </span>
                              English
                            </Radio>
                          </div>
                        </div>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                  <Collapse defaultActiveKey={['1']} ghost>
                    <Panel header={formatMessage({ id: 'article.editor.form.tag' })} key="1">
                      <span className="text-muted">
                        <FormattedMessage id="article.editor.form.tagContent" />
                      </span>
                      <Form.Item
                        className="mb-2"
                        name="tags"
                        initialValue={tags}
                        rules={[
                          () => ({
                            validator(rule, value) {
                              if (value && value.length > 5) {
                                // eslint-disable-next-line prefer-promise-reject-errors
                                return Promise.reject('No more than 5 tags allowed')
                              }
                              return Promise.resolve()
                            },
                          }),
                        ]}
                        normalize={values =>
                          values.map(x => x.replace(/[&\/\\#,+()$~%.'":*?<>{}`]/g, ''))
                        }
                      >
                        <Select
                          mode="tags"
                          size="default"
                          placeholder={formatMessage({ id: 'article.editor.form.addTag' })}
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                    </Panel>
                    <Panel header={formatMessage({ id: 'article.editor.form.privacy' })} key="2">
                      <Form.Item
                        name="isPublic"
                        initialValue={isPublic}
                        valuePropName="checked"
                        label={formatMessage({ id: 'article.editor.form.isPublic' })}
                      >
                        <Switch className="component-col d-flex ml-auto" />
                      </Form.Item>
                      <Form.Item
                        name="isListed"
                        initialValue={isListed}
                        valuePropName="checked"
                        label={formatMessage({ id: 'article.editor.form.isListed' })}
                      >
                        <Switch className="component-col d-flex ml-auto" />
                      </Form.Item>
                    </Panel>
                  </Collapse>
                  <div className="pt-4">
                    <Form.Item>
                      <Button type="primary" htmlType="submit" loading={loading}>
                        <FormattedMessage id="article.editor.form.publish" />
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </PerfectScrollbar>
          )}
        </div>
        <Tooltip title="Publish" placement="left">
          <a
            role="button"
            tabIndex="0"
            onFocus={e => {
              e.preventDefault()
            }}
            onKeyPress={toggleForm}
            onClick={toggleForm}
            style={{ top: '105px' }}
            className={style.cui__sidebar__toggleButton}
          >
            <i className="icmn icmn-earth mr-2" />
            <span><FormattedMessage id="article.editor.form.publish" /></span>
          </a>
        </Tooltip>
      </div>
    )
  }
}

export default injectIntl(PublicationForm)
