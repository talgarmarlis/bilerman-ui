import React from 'react'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../../style.module.scss'

const PasswordResetForm = ({ loading, onFinish, onFinishFailed }) => {
  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-24 mb-4">
          <strong>Reset Password</strong>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please create a password' }]}
            hasFeedback
          >
            <Input type="password" size="large" placeholder="New password" />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password' },
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
            <Input type="password" size="large" placeholder="Password Confirmation" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="text-center w-100"
            loading={loading}
          >
            <strong>Reset my password</strong>
          </Button>
        </Form>
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          <i className="fe fe-arrow-left mr-1 align-middle" />
          Go to Sign in
        </Link>
      </div>
    </div>
  )
}

export default PasswordResetForm
