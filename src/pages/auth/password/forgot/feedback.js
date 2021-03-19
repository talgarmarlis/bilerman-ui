import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import style from '../../style.module.scss'

const PasswordForgotFeedback = () => {
  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark text-center font-size-24 mb-4">
          <strong><FormattedMessage id="auth.password.forgot.feedback.thankYou" /></strong>
        </div>
        <div className="text-center">
          <div className="font-size-18 text-dark mb-4">
            <strong>
              <FormattedMessage id="auth.password.forgot.feedback.instruction" />
            </strong>
          </div>
          <div className="font-size-18 text-dark mb-4">
            <FormattedMessage id="auth.password.forgot.feedback.instructionFollow" />
          </div>
        </div>
      </div>
      <div className="text-center pt-2 mb-auto">
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          <FormattedMessage id="auth.confirm.index.signIn" />
        </Link>
        <span className="mr-2"> <FormattedMessage id="auth.password.forgot.feedback.toContinue" /></span>
      </div>
    </div>
  )
}

export default PasswordForgotFeedback
