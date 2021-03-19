import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const RegistrationForm = ({ loading, onFinish, onFinishFailed, intl: { formatMessage } }) => {
  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-24 mb-4">
          <strong>
            <FormattedMessage id="auth.register.form.createAccount" />
          </strong>
        </div>
        <div className="mb-4">
          <p>
            <FormattedMessage id="auth.register.form.info" />
          </p>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: formatMessage({ id: 'auth.register.form.inputFirstName' }) }]}
          >
            <Input size="large" placeholder={formatMessage({ id: 'auth.register.form.firstName' })} />
          </Form.Item>
          <Form.Item
            name="surname"
            rules={[{ required: true, message: formatMessage({ id: 'auth.register.form.inputLastName' }) }]}
          >
            <Input size="large" placeholder={formatMessage({ id: 'auth.register.form.lastName' })} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: formatMessage({ id: 'auth.register.form.inputEmail' }) }]}
          >
            <Input type="email" size="large" placeholder={formatMessage({ id: 'auth.register.form.email' })} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: formatMessage({ id: 'auth.register.form.createPassword' }) }]}
            hasFeedback
          >
            <Input type="password" size="large" placeholder={formatMessage({ id: 'auth.register.form.password' })} />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: formatMessage({ id: 'auth.register.form.confirmPassword' }) },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  // eslint-disable-next-line prefer-promise-reject-errors
                  return Promise.reject('The two passwords that you entered do not match!')
                },
              }),
            ]}
          >
            <Input type="password" size="large" placeholder={formatMessage({ id: 'auth.register.form.passwordConfirm' })} />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="text-center w-100"
            loading={loading}
          >
            <strong><FormattedMessage id="auth.register.form.signUp" /></strong>
          </Button>
        </Form>
        <div>
          <span className="mr-1">By signing up, you agree to the</span>
          <a href="#/service/terms" className="kit__utils__link">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#/service/privacy-policy" className="kit__utils__link">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">
          <FormattedMessage id="auth.register.form.haveAccount" />
        </span>
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          <FormattedMessage id="auth.confirm.index.signIn" />
        </Link>
      </div>
    </div>
  )
}

export default injectIntl(RegistrationForm)
