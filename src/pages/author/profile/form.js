import React, {useState} from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Form, Input, Button } from 'antd'
import {CloseOutlined } from '@ant-design/icons'
import { userService } from 'services'
import classNames from 'classnames'
import style from './style.module.scss'

const { TextArea } = Input

const ProfileForm = ({enabled, toggleForm, user, intl: { formatMessage }}) => {

  const [loading, setLoading] = useState(false)

  const onFinish = values => {
    setLoading(true)
    const updatedUser = {...user, ...values };
    userService.updateUser(updatedUser).then(() => {
      setLoading(false)
      toggleForm();
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

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
                <strong><FormattedMessage id="author.profile.form.title" /></strong>
              </h5>
              <div className="cui__utils__line" style={{ marginTop: 25, marginBottom: 30 }} />
              <Form
                layout="vertical"
                hideRequiredMark
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="mb-4"
              >
                <div className={style.cui__sidebar__type}>
                  <Form.Item
                    name="name"
                    initialValue={user.name}
                    rules={[{ required: true, message: formatMessage({ id: 'author.profile.form.nameError' }) }]}
                  >
                    <Input placeholder={formatMessage({ id: 'author.profile.form.name' })} />
                  </Form.Item>
                  <Form.Item
                    name="surname"
                    initialValue={user.surname}
                    rules={[{ required: true, message: formatMessage({ id: 'author.profile.form.surnameError' }) }]}
                  >
                    <Input placeholder={formatMessage({ id: 'author.profile.form.surname' })} />
                  </Form.Item>
                  <Form.Item
                    name="bio"
                    initialValue={user.bio}
                  >
                    <TextArea placeholder={formatMessage({ id: 'author.profile.form.bio' })} />
                  </Form.Item>
                </div>
                <div className="border-top pt-4">
                  <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                      <FormattedMessage id="author.profile.form.save" />
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </PerfectScrollbar>
        )}
      </div>
    </div>
  )
}

export default injectIntl(ProfileForm)
