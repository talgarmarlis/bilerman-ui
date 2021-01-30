import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../style.module.scss'

const PasswordResetFeedback = () => {
  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark text-center font-size-24 mb-4">
          <strong>Thank you!</strong>
        </div>
        <div className="text-center">
          <div className="font-size-18 text-dark mb-4">
            <strong>Your password have been successfully updated.</strong>
          </div>
          <div className="font-size-18 text-dark mb-4">Please, sign in to continue.</div>
        </div>
      </div>
      <div className="text-center pt-2 mb-auto">
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default PasswordResetFeedback
