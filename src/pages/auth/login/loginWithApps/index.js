import React from 'react'
import { FormattedMessage } from 'react-intl'
import FacebookLogin from './facebook'
import GoogleLogin from './google'


const LoginWithApps = () => {


  return (
    <div>
      <div className="pt-3 text-center flex-grow-1">
        <div className="mb-3">
          <span>
            {' '}
            <FormattedMessage id="auth.login.index.orSignInWithSocial" />{' '}
          </span>
        </div>
        <div className="d-flex">
          <div className="ml-auto mr-3">
            <GoogleLogin />
          </div>
          <div className="mr-auto">
            <FacebookLogin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginWithApps
