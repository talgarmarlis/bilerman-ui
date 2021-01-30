import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { authService } from 'services'
import style from '../../style.module.scss'
import PasswordResetFeedback from './feedback'
import PasswordResetForm from './form'

class PasswordReset extends Component {
  state = {
    loading: false,
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props
    authService
      .confirmPasswordResetToken(params.token)
      .then(result => {
        this.setState({ user: result.data, validToken: true })
      })
      .catch(() => {
        this.setState({ invalidToken: true })
      })
  }

  onFinish = values => {
    this.setState({ loading: true })
    const { user } = this.state
    user.password = values.password
    authService.resetPassword(user).then(() => {
      this.setState({ success: true, loading: false })
    })
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  render() {
    const { loading, success, validToken, invalidToken } = this.state
    return (
      <div>
        <div className={style.block}>
          <div className="row">
            <div className="col-xl-12">
              {validToken && (
                <div>
                  {success && <PasswordResetFeedback />}
                  {!success && (
                    <PasswordResetForm
                      loading={loading}
                      onFinish={this.onFinish}
                      onFinishFailed={this.onFinishFailed}
                    />
                  )}
                </div>
              )}
              {invalidToken && (
                <div>
                  <div className={`card ${style.container}`}>
                    <div className="text-dark text-center font-size-24 mb-4">
                      <strong>Oops!</strong>
                    </div>
                    <div className="text-center">
                      <div className="font-size-18 text-dark mb-4">
                        <strong>Your password reset link is invalid or have been expired</strong>
                      </div>
                      <div className="font-size-18 text-dark mb-4">
                        Please, request another link to reset your password.
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-2 mb-auto">
                    <Link to="/auth/password/forgot" className="kit__utils__link font-size-16">
                      Forgot password ?
                    </Link>
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

export default injectIntl(PasswordReset)
