import React from "react";
import { FormattedMessage, injectIntl } from 'react-intl'
import {Upload, Button} from 'antd'
import { CameraOutlined, DeleteOutlined } from '@ant-design/icons'
import { imageService } from 'services'
import config from 'config'
import style from './style.module.scss'

const { Dragger } = Upload

const PreviewImage = ({imageId, removeImage, handleImage}) => {

  const handleFileChange = file => {
    imageService.upload("article", file).then(result => {
      handleImage(result.data)
    })
  }

  return (
    <>
      <div className={style.cui__sidebar__type__title}>
        <span><FormattedMessage id="article.editor.form.preview" /></span>
      </div>
      {imageId && (
        <div key={imageId} className={style.item}>
          <div className={style.itemContent}>
            <div className={style.itemControl}>
              <div className={style.itemControlContainer}>
                <Button.Group size="default">
                  <Button onClick={removeImage}>
                    <DeleteOutlined />
                  </Button>
                </Button.Group>
              </div>
            </div>
            <img src={`${config.apiUrl}/images/article/${imageId}`} alt={imageId} />
          </div>
        </div>
      )}
      {!imageId && (
        <Dragger
          multiple={false}
          customRequest={e => handleFileChange(e.file)}
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
    </>
  )
}

export default injectIntl(PreviewImage)
