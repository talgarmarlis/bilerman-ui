import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

const Logo = ({ theme = 'default' }) => {
  console.log(theme)
  return (
    <div className={style.logoContainer}>
      <div className={style.logo}>
        <Link to="/">
          {theme === 'default' && (
            <img
              src="resources/images/brand/bilerman-logo-dark.png"
              className="mr-2"
              alt="Bilerman logo"
            />
          )}
          {theme === 'dark' && (
            <img
              src="resources/images/brand/bilerman-logo-white.png"
              className="mr-2"
              alt="Bilerman logo"
            />
          )}
        </Link>
      </div>
    </div>
  )
}

export default Logo
