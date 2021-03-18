import React from 'react'
import { FormattedMessage } from 'react-intl'

const Contact = () => {
  return (
    <div>
      <div className="kit__utils__heading">
        <h5>
          <span className="mr-3">
            <FormattedMessage id="service.about.contact.contactBilerman" />
          </span>
        </h5>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="alert alert-light" role="alert">
            <p className="mb-2">
              <strong>Email: </strong> bilermaninc@gmail.com
            </p>
            <FormattedMessage id="service.about.contact.message" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
