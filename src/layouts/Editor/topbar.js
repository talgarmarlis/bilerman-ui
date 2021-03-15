import React from 'react'
import Logo from '../components/Logo'
import LanguageSwitcher from '../components/LanguageSwitcher'
import UserMenu from '../components/UserMenu'
import style from './style.module.scss'

const TopBar = ({ theme }) => {
  return (
    <div className={style.topbar}>
      <div className="mr-4">
        <Logo theme={theme} />
      </div>
      <div className="text-primary mr-auto">Илим, билим жана технология</div>
      <div className="mr-4 d-none d-md-block" />
      <div className="mb-0 mr-auto d-xl-block d-none" />
      <div className="mr-4 d-none d-sm-block">
        <LanguageSwitcher />
      </div>
      <div className="">
        <UserMenu />
      </div>
    </div>
  )
}

export default TopBar
