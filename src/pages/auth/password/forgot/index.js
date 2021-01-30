import React, { Component } from 'react'
import { authService } from 'services'
import PasswordForgotForm from './form'
import PasswordForgotFeedback from './feedback'

class PasswordForgot extends Component {
  state = {
    loading: false,
  }

  onFinish = values => {
    this.setState({ loading: true })
    authService.requestPasswordResetLink(values.email).then(() => {
      this.setState({ success: true, loading: false })
    })
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  render() {
    const { loading, success } = this.state
    return (
      <div>
        {success && <PasswordForgotFeedback />}
        {!success && (
          <PasswordForgotForm
            loading={loading}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          />
        )}
      </div>
    )
  }
}

export default PasswordForgot
