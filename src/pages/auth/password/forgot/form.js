import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../../style.module.scss'

const PasswordForgotForm = ({ loading, onFinish, onFinishFailed, intl: { formatMessage } }) => {
  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-24 mb-4">
          <strong><FormattedMessage id="auth.password.forgot.feedback.resetPassword" /></strong>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: formatMessage({ id: 'auth.register.form.inputEmail' }) }]}
          >
            <Input size="large" placeholder={formatMessage({ id: 'auth.register.form.email' })} />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="text-center w-100"
            loading={loading}
          >
            <strong><FormattedMessage id="auth.password.forgot.feedback.resetMyPassword" /></strong>
          </Button>
        </Form>
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          <i className="fe fe-arrow-left mr-1 align-middle" />
          <FormattedMessage id="auth.password.forgot.feedback.goToSignIn" />
        </Link>
      </div>
    </div>
  )
}

export default injectIntl(PasswordForgotForm)
