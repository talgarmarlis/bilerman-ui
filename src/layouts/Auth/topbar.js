import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import LanguageSwitcher from '../components/LanguageSwitcher'
import style from './style.module.scss'

const TopBar = ({ theme }) => {
  return (
    <div className={style.topbar}>
      <div>
        <Logo theme={theme} />
      </div>
      <div className="text-primary mr-auto">Илим, билим жана технология</div>
      <div className="mr-4 d-none d-md-block" />
      <div className="mb-0 mr-auto d-xl-block d-none" />
      <div className="mr-4 d-none d-sm-block">
        <LanguageSwitcher />
      </div>
      <div className="mr-4">
        <Link to="/auth/login" className="btn btn-default width-100">
          Sign in
        </Link>
      </div>
      <div>
        <Link to="/auth/register" className="btn btn-outline-default width-100">
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default TopBar
