import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

const Logo = ({ theme = 'default' }) => {
  return (
    <div className={style.logoContainer}>
      <div className={style.logo}>
        <Link to="/">
          {theme === 'default' && (
            <img src="resources/images/brand/bilerman-dot-logo-dark.png" alt="Bilerman logo" />
          )}
          {theme === 'dark' && (
            <img src="resources/images/brand/bilerman-dot-logo-white.png" alt="Bilerman logo" />
          )}
        </Link>
      </div>
    </div>
  )
}

export default Logo
