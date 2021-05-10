import React from 'react'
import Logo from '../components/Logo'
import LanguageSwitcher from '../components/LanguageSwitcher'
import UserMenu from '../components/UserMenu'
import style from './style.module.scss'

const TopBar = ({ theme }) => {
  return (
    <div className={style.topbar}>
      <div className="container-xl d-flex flex-row flex-nowrap align-items-center">
        <div className="mr-3">
          <Logo theme={theme} />
        </div>
        <div className="d-none d-md-block text-primary mr-auto pt-2">Илим, билим жана технология</div>
        <div className="mb-0 mr-auto" />
        <div className="mr-3">
          <LanguageSwitcher />
        </div>
        <div className="">
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

export default TopBar
