import React from 'react'
import style from './style.module.scss'

const Footer = () => {
  return (
    <div className="mt-auto pb-5 pt-5">
      <ul
        className={`${style.footerNav} list-unstyled d-flex mb-0 flex-wrap justify-content-center`}
      >
        <li>
          <a href="/#/privacy" onClick={e => e.preventDefault()}>
            Terms of Use
          </a>
        </li>
        <li>
          <a href="/#/privacy" onClick={e => e.preventDefault()}>
            Compliance
          </a>
        </li>
        <li>
          <a href="/#/privacy" onClick={e => e.preventDefault()}>
            Support
          </a>
        </li>
        <li>
          <a href="/#/privacy" onClick={e => e.preventDefault()}>
            Contacts
          </a>
        </li>
      </ul>
      <div className="text-center">
        Copyright © 2020-2021 Bilerman Soft |{' '}
        <a
          href="/#/privacy"
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.preventDefault()}
        >
          Privacy Policy
        </a>
      </div>
    </div>
  )
}

export default Footer
