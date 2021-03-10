import React, { Component } from 'react'
import { userService } from 'services'

class Profile extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props
    userService.getUser(params.id)
      .then(result => {
        this.setState({ user: result.data })
      })
  }

  render() {
    const { user } = this.state
    return (
      <div>
        <div>
          <div className="row">
            {user && <h1>{user.name + user.surname}</h1>}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
