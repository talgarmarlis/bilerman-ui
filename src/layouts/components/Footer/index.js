import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

const Footer = () => {
  return (
    <div className="mt-auto pb-5 pt-5">
      <ul
        className={`${style.footerNav} list-unstyled d-flex mb-0 flex-wrap justify-content-center`}
      >
        <li>
          <Link to="/service/terms">Terms of Use</Link>
        </li>
        <li>
          <Link to="/service/privacy-policy">Privacy policy</Link>
        </li>
        <li>
          <Link to="/service/about">About</Link>
        </li>
        <li>
          <Link to="/service/contact">Contact</Link>
        </li>
      </ul>
      <div className="text-center">Copyright © 2020-2021 Bilerman Inc.</div>
    </div>
  )
}

export default Footer
