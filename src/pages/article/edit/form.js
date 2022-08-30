import React, { useEffect, useState } from "react";
import { FormattedMessage, injectIntl } from 'react-intl'
import {Radio, Form, Input, Select, Button, Switch} from 'antd'
import { articleService } from 'services'
import { history } from 'index'
import style from './style.module.scss'
import PreviewImage from "./previewImage";

const { TextArea } = Input

const PublicationForm = ({handleImage, subtitle, draft, intl: { formatMessage }}) => {

  const [form] = Form.useForm()
  const [formArticle, setFormArticle] = useState({})
  const [loading, setloading] = useState(false)

  useEffect(() => {
    if (draft.published) {
      const { article } = draft
      setFormArticle({ ...article, draftId: draft.id })
    } else {
      setFormArticle({
        draftId: draft.id,
        title: draft.title,
        subtitle,
        preview: draft.preview,
        imageId: draft.imageId,
        tags: [],
        languageId: 1,
        isPublic: true,
        isListed: true
      })
    }
  }, [draft])

  useEffect(() => {
    form.resetFields()
  }, [formArticle])

  const onFinish = values => {
    setloading(true)
    values.draftId = formArticle.draftId
    values.preview = formArticle.preview
    articleService.publishDraft(values).then(result => {
      setloading(false)
      history.push(`/article/details/${result.data.id}`)
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const removeImage = () => {
    setFormArticle(prevState => ({...prevState, imageId: null}))
    handleImage(null)
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="mb-4"
      labelAlign="left"
    >
      <div className={style.cui__sidebar__type}>
        <PreviewImage imageId={draft.imageId} removeImage={removeImage} handleImage={handleImage} />
        <Form.Item
          name="title"
          initialValue={formArticle.title}
          rules={[{ required: true, message: formatMessage({ id: 'article.editor.form.inputTitle' }) }]}
        >
          <TextArea
            placeholder={formatMessage({ id: 'article.editor.form.title' })}
            size="large"
            autoSize={{ minRows: 1, maxRows: 5 }}
            style={{fontSize:"16px", fontWeight:"bold", resize:"none"}}
          />
        </Form.Item>
        <Form.Item
          name="subtitle"
          initialValue={formArticle.subtitle}
        >
          <TextArea
            placeholder={formatMessage({ id: 'article.editor.form.subtitle' })}
            autoSize={{ minRows: 3, maxRows: 6 }}
            style={{resize:"none"}}
          />
        </Form.Item>
        <strong><FormattedMessage id="article.editor.form.note" /> </strong>
        <span className="text-muted"><FormattedMessage id="article.editor.form.noteMessage" /></span>
      </div>
      <div className={style.cui__sidebar__type}>
        <div className={style.cui__sidebar__type__title}>
          <span><FormattedMessage id="article.editor.form.language" /></span>
        </div>
        <Form.Item
          className="mb-2"
          name="languageId"
          initialValue={formArticle.languageId}
          rules={[{ required: true, message: formatMessage({ id: 'article.editor.form.selectLanguage' }) }]}
        >
          <Radio.Group buttonStyle="solid" style={{margin:"auto"}}>
            <Radio.Button value={1}>
              <span role="img" aria-label="Кыргызча" className="mr-2">🇰🇬</span>
              Кыргызча
            </Radio.Button>
            <Radio.Button value={2}>
              <span role="img" aria-label="Русский" className="mr-2">🇷🇺</span>
              Русский
            </Radio.Button>
            <Radio.Button value={3}>
              <span role="img" aria-label="English" className="mr-2">🇬🇧</span>
              English
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </div>
      <div className={style.cui__sidebar__type}>
        <div className={style.cui__sidebar__type__title}>
          <span><FormattedMessage id="article.editor.form.tag" /></span>
        </div>
        <span className="text-muted"><FormattedMessage id="article.editor.form.tagContent" /></span>
        <Form.Item
          className="mb-2"
          name="tags"
          initialValue={formArticle.tags}
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
      </div>
      <div className={style.cui__sidebar__type}>
        <div className={style.cui__sidebar__type__title}>
          <span><FormattedMessage id="article.editor.form.privacy" /></span>
        </div>
        <Form.Item
          name="isPublic"
          initialValue={formArticle.isPublic}
          valuePropName="checked"
          label={formatMessage({ id: 'article.editor.form.isPublic' })}
        >
          <Switch className="component-col d-flex ml-auto" />
        </Form.Item>
        <Form.Item
          name="isListed"
          initialValue={formArticle.isListed}
          valuePropName="checked"
          label={formatMessage({ id: 'article.editor.form.isListed' })}
        >
          <Switch className="component-col d-flex ml-auto" />
        </Form.Item>
      </div>
      <div className="pt-4">
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            <FormattedMessage id="article.editor.form.publish" />
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
}

export default injectIntl(PublicationForm)
