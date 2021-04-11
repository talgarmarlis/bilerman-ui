import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

const Logo = ({ theme = 'default' }) => {
  return (
    <div className={style.logoContainer}>
      <div className={style.logo}>
        <div className="d-none d-sm-block">
          <Link to="/">
            {theme === 'default' && (
              <img src="/resources/images/brand/bilerman-dot-logo-dark.png" alt="Bilerman logo" />
            )}
            {theme === 'dark' && (
              <img src="resources/images/brand/bilerman-dot-logo-white.png" alt="Bilerman logo" />
            )}
          </Link>
        </div>
        <div className="d-block d-sm-none">
          <Link to="/">
            {theme === 'default' && (
              <img src="/resources/images/brand/b-logo-dark.png" alt="Bilerman logo" />
            )}
            {theme === 'dark' && (
              <img src="/resources/images/brand/b-logo-white.png" alt="Bilerman logo" />
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Logo
