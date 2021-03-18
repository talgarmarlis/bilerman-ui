import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
  logo: settings.logo,
})

const Login = ({ dispatch, user, logo, intl: { formatMessage } }) => {
  const onFinish = values => {
    dispatch({
      type: 'user/LOGIN',
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <div className="text-center mb-3">
        <h1 className="mb-3 px-3">
          <strong><FormattedMessage id="auth.login.index.welcome" /> {logo}</strong>
        </h1>
      </div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-24 mb-3">
          <strong>
            <FormattedMessage id="auth.login.index.signIn" />
          </strong>
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
            rules={[{ required: true, message: formatMessage({ id: 'auth.login.index.inputEmail' }) }]}
          >
            <Input size="large" placeholder={formatMessage({ id: 'auth.login.index.email' })} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: formatMessage({ id: 'auth.login.index.inputPassword' }) }]}
          >
            <Input size="large" type="password" placeholder={formatMessage({ id: 'auth.login.index.password' })} />
          </Form.Item>
          <Button
            type="primary"
            size="large"
            className="text-center w-100"
            htmlType="submit"
            loading={user.loading}
          >
            <strong><FormattedMessage id="auth.confirm.index.signIn" /></strong>
          </Button>
        </Form>
        <Link to="/auth/password/forgot" className="kit__utils__link font-size-16">
          <FormattedMessage id="auth.login.index.forgotPassword" />
        </Link>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">
          <FormattedMessage id="auth.login.index.dontHaveAccount" />
        </span>
        <Link to="/auth/register" className="kit__utils__link font-size-16">
          <FormattedMessage id="auth.login.index.signUp" />
        </Link>
      </div>
    </div>
  )
}

export default injectIntl(connect(mapStateToProps)(Login))
