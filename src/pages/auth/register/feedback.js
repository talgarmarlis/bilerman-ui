import React from 'react'
import { Button, Form, notification } from 'antd'
import { Link } from 'react-router-dom'
import { authService } from 'services'
import style from '../style.module.scss'

const RegistrationFeedback = ({ user }) => {
  const resendEmail = () => {
    authService.sendToken({ id: user.id }).then(() => {
      notification.success({
        message: 'Email with the verification link has been sent',
      })
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark text-center font-size-24 mb-4">
          <strong>Hello {user.name},</strong>
        </div>
        <div className="text-center">
          <div className="font-size-18 text-dark mb-4">
            <strong>Thank you for signing up with Bilerman!</strong>
          </div>
          <div className="font-size-18 text-dark mb-4">
            Check your email and follow the instructions to activate your account.
          </div>
          <p>Resend your confirmation email if you did not receive one.</p>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={resendEmail}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Button type="primary" htmlType="submit" size="large" className="text-center w-100">
            <strong>Resend</strong>
          </Button>
        </Form>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Already confirmed?</span>
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default RegistrationFeedback
