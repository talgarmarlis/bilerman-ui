import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const System404 = () => {
  return (
    <div>
      <Helmet title="Page 404" />
      <div className="container pl-5 pr-5 pt-5 pb-5 mb-auto text-dark font-size-32">
        <div className="font-weight-bold mb-3">
          <FormattedMessage id="auth.404.index.404" />
        </div>
        <div className="text-gray-6 font-size-24">
          <FormattedMessage id="auth.404.index.description" />
        </div>
        <div className="font-weight-bold font-size-70 mb-1">404 —</div>
        <Link to="/" className="btn btn-outline-primary width-100">
          <FormattedMessage id="auth.404.index.goBack" />
        </Link>
      </div>
    </div>
  )
}

export default System404
