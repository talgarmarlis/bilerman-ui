import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Logo from '../components/Logo'
import LanguageSwitcher from '../components/LanguageSwitcher'

import style from './style.module.scss'

const TopBar = ({ theme }) => {
  return (
    <div className={style.topbar}>
      <div className="container-xl d-flex flex-row flex-nowrap align-items-center">
        <div className="mr-3">
          <Logo theme={theme} />
        </div>
        <div className="d-none d-md-block text-primary mr-auto">Илим, билим жана технология</div>
        <div className="mb-0 mr-auto" />
        <div className="mr-2">
          <Link to="/auth/login" className="btn btn-default">
            <FormattedMessage id="auth.login.index.signIn" />
          </Link>
        </div>
        <div className="mr-3">
          <Link to="/auth/register" className="btn btn-outline-default">
            <FormattedMessage id="auth.login.index.signUp" />
          </Link>
        </div>
        <div className="pt-1">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}

export default TopBar
