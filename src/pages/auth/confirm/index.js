import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
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
                      <strong>Hello {user.name},</strong>
                    </div>
                    <div className="text-center">
                      <div className="font-size-18 text-dark mb-4">
                        <strong>Thank you for signing up with Bilerman!</strong>
                      </div>
                      <div className="font-size-18 text-dark mb-4">
                        Your email account have been verified.
                      </div>
                      <p>Please sign in to continue.</p>
                    </div>
                    <Link to="/auth/login">
                      <Button type="primary" size="large" className="text-center w-100">
                        <strong>Sign in</strong>
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
              {failure && (
                <div>
                  <div className={`card ${style.container}`}>
                    <div className="text-dark text-center font-size-24 mb-4">
                      <strong>Oops!</strong>
                    </div>
                    <div className="text-center">
                      <div className="font-size-18 text-dark mb-4">
                        <strong>The email address was not verified.</strong>
                      </div>
                      <div className="font-size-18 text-dark mb-4">
                        Please, see the below message to know what went wrong.
                      </div>
                      <p>{message}</p>
                    </div>
                  </div>
                  <div className="text-center pt-2 mb-auto">
                    <Link to="/auth/register" className="kit__utils__link font-size-16">
                      Sign up
                    </Link>
                    <span className="mr-2"> to continue.</span>
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
