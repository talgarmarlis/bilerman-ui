import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../style.module.scss'

const PasswordForgotFeedback = () => {
  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark text-center font-size-24 mb-4">
          <strong>Thank you!</strong>
        </div>
        <div className="text-center">
          <div className="font-size-18 text-dark mb-4">
            <strong>Instructions to reset your password have been sent to your email.</strong>
          </div>
          <div className="font-size-18 text-dark mb-4">
            Please, follow the instructions to reset your password.
          </div>
        </div>
      </div>
      <div className="text-center pt-2 mb-auto">
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          Sign in
        </Link>
        <span className="mr-2"> to continue.</span>
      </div>
    </div>
  )
}

export default PasswordForgotFeedback
