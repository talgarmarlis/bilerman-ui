import React from 'react'
import { FormattedMessage } from 'react-intl'

const Terms = () => {
  return (
    <div>
      <div className="kit__utils__heading">
        <h5>
          <span className="mr-3">
            <FormattedMessage id="service.terms.index.termsOfService" />
          </span>
        </h5>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="alert alert-light" role="alert">
            <p className="mb-2">
              <strong>
                <FormattedMessage id="service.privacyPolicy.index.date" />
              </strong>
            </p>
            <FormattedMessage id="service.privacyPolicy.index.message1" />
          </div>
          <br />
          <p>
            <FormattedMessage id="service.terms.index.message1" />
          </p>
          <p>
            <FormattedMessage id="service.terms.index.message2" />
          </p>
          <p>
            <FormattedMessage id="service.terms.index.message3" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Terms
