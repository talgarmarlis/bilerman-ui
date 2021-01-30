import React, { Component } from 'react'
import { authService } from 'services'
import RegistrationForm from './form'
import RegistrationFeedback from './feedback'

class Register extends Component {
  state = {
    loading: false,
  }

  onFinish = values => {
    this.setState({ loading: true })
    authService.signUp(values).then(result => {
      console.log(result.data)
      this.setState({ user: result.data, loading: false })
    })
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  render() {
    const { loading, user } = this.state
    return (
      <div>
        {user && <RegistrationFeedback user={user} />}
        {!user && (
          <RegistrationForm
            loading={loading}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          />
        )}
      </div>
    )
  }
}

export default Register
