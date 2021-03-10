import React  from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Radio, Tooltip, Form, Input, Upload, Select, Button} from 'antd'
import {CameraOutlined, CloseOutlined, DeleteOutlined} from "@ant-design/icons";
import {articleService, imageService} from "services";
import classNames from 'classnames'
import config from "config";
import style from '../style.module.scss'

const { Dragger } = Upload
const {TextArea} = Input

class PublicationForm extends React.Component{

  state = {
    tags:[],
    languageId: 1
  }

  componentWillReceiveProps() {
    const {draft} = this.props;
    if(draft.published){
      const { article } = draft;
      this.setState({draftId: draft.id, title: article.title, subtitle: article.subtitle, imageId: draft.imageId, languageId: article.languageId, tags:article.tags.map(tag => tag.name)});
    }
    else{
      this.setState({draftId: draft.id, title: draft.title, subtitle: draft.subtitle, imageId: draft.imageId});
    }
  }

  onFinish = values => {
    const { draftId } = this.state;
    this.setState({loading: true})
    values.draftId = draftId;
    articleService.publishDraft(values).then(result => {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ article: result, published: true, loading: false });
    });
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  handleFileChange =(file) => {
    const {handleImage} = this.props
    imageService.upload(file).then(result => {
      console.log(result)
      handleImage(result.data)
    })
  }

  removeImage = () => {
    const {handleImage} = this.props
    this.setState({imageId: null});
    handleImage(null);
  }

  render() {
    const { enabled, toggleForm } = this.props
    const { tags, title, subtitle, languageId, loading, imageId } = this.state;

    return (
      <div>
        <div
          className={classNames(style.cui__sidebar, {
            [style.cui__sidebar__toggled]: enabled,
          })}
        >
          {enabled &&
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
                <strong>Publish your draft</strong>
              </h5>
              <div className="cui__utils__line" style={{ marginTop: 25, marginBottom: 30 }} />
              <Form
                layout="vertical"
                hideRequiredMark
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                className="mb-4"
              >
                <div className={style.cui__sidebar__type}>
                  <div className={style.cui__sidebar__type__title}>
                    <span>Your article preview</span>
                  </div>
                  {imageId &&
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
                      <img src={`${config.apiUrl}/images/${imageId}`} alt={title} />
                    </div>
                  </div>
                  }
                  {!imageId &&
                    <Dragger multiple={false} customRequest={(e)=> this.handleFileChange(e.file)} showUploadList={false} className="mb-4">
                      <p className="ant-upload-drag-icon">
                        <CameraOutlined />
                      </p>
                      <p className="ant-upload-text">Pick or drag your preview image</p>
                      <p className="ant-upload-hint">
                        Include a high-quality image in your story to make it more inviting to readers
                      </p>
                    </Dragger>
                  }
                  <Form.Item
                    name="title"
                    initialValue={title}
                    rules={[{ required: true, message: 'Please input your title' }]}
                  >
                    <Input placeholder="Title" />
                  </Form.Item>
                  <Form.Item
                    name="subtitle"
                    initialValue={subtitle}
                    rules={[{ required: true, message: 'Please input your subtitle' }]}
                  >
                    <TextArea placeholder="Subtitle" />
                  </Form.Item>
                  <strong>Note: </strong>
                  <span className="text-muted">
                    Changes here will affect how your story appears in public places like Bilerman’s homepage — not the story itself
                  </span>
                </div>
                <div className={style.cui__sidebar__type}>
                  <div className={style.cui__sidebar__type__title}>
                    <span>Content language</span>
                  </div>
                  <Form.Item
                    className="mb-2"
                    name="languageId"
                    initialValue={languageId}
                    rules={[{ required: true, message: 'Please, select article language' }]}
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
                <div className={style.cui__sidebar__type}>
                  <div className={style.cui__sidebar__type__title}>
                    <span>Tags</span>
                  </div>
                  <span className="text-muted">
                    Add or change tags (up to 5) so readers know what your story is about
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
                        }
                      })
                    ]}
                    normalize={(values)=>values.map(x => x.replace(/[&\/\\#,+()$~%.'":*?<>{}`]/g, ""))}
                  >
                    <Select
                      mode="tags"
                      size="default"
                      placeholder="Add a tag"
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </div>
                <div className="border-top pt-4">
                  <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                      Publish
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </PerfectScrollbar>
          }
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
            style={{ top: '105px'}}
            className={style.cui__sidebar__toggleButton}
          >
            <i className="icmn icmn-earth mr-2" />
            <span>Publish</span>
          </a>
        </Tooltip>
      </div>
    )
  }
}

export default PublicationForm