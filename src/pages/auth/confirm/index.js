import React, { Component } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { authService } from '../../../services'
import style from '../style.module.scss'

class Confirm extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props
    authService
      .confirmToken(params.token)
      .then(result => {
        this.setState({ user: result, loading: false, success: true })
      })
      .catch(err => {
        const { message } = err
        this.setState({ loading: false, failure: true, message })
      })
  }

  render() {
    const { user, loading, success, failure, message } = this.state
    return (
      <div>
        <div className={style.block}>
          <div className="row">
            <div className="col-xl-12">
              {loading && <div> Loader </div>}
              {success && user && (
                <div>
                  <div className={`card ${style.container}`}>
                    <div className="text-dark text-center font-size-24 mb-4">
                      <strong><FormattedMessage id="auth.confirm.index.hello" /> {user.name},</strong>
                    </div>
                    <div className="text-center">
                      <div className="font-size-18 text-dark mb-4">
                        <strong>
                          <FormattedMessage id="auth.confirm.index.thanks" />
                        </strong>
                      </div>
                      <div className="font-size-18 text-dark mb-4">
                        <FormattedMessage id="auth.confirm.index.emailVerified" />
                      </div>
                      <p>
                        <FormattedMessage id="auth.confirm.index.signInContinue" />
                      </p>
                    </div>
                    <Link to="/auth/login">
                      <Button type="primary" size="large" className="text-center w-100">
                        <strong>
                          <FormattedMessage id="auth.confirm.index.signIn" />
                        </strong>
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
              {failure && (
                <div>
                  <div className={`card ${style.container}`}>
                    <div className="text-dark text-center font-size-24 mb-4">
                      <strong><FormattedMessage id="auth.confirm.index.oops" /></strong>
                    </div>
                    <div className="text-center">
                      <div className="font-size-18 text-dark mb-4">
                        <strong>
                          <FormattedMessage id="auth.confirm.index.emailNotVerified" />
                        </strong>
                      </div>
                      <div className="font-size-18 text-dark mb-4">
                        <FormattedMessage id="auth.confirm.index.message" />
                      </div>
                      <p>{message}</p>
                    </div>
                  </div>
                  <div className="text-center pt-2 mb-auto">
                    <Link to="/auth/register" className="kit__utils__link font-size-16">
                      <FormattedMessage id="auth.confirm.index.signUp" />
                    </Link>
                    <span className="mr-2"> <FormattedMessage id="auth.confirm.index.toContinue" /></span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default injectIntl(Confirm)
