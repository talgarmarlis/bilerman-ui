import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from 'services'
import Info from './info'
import Articles from './articles'

@connect(({ user }) => ({ user }))
class Profile extends Component {
  state = {
    author: null,
  }

  componentDidMount() {
    const {
      match: { params },
      user,
    } = this.props
    let userId = user.id
    if (params.id) userId = params.id
    userService.getUser(userId).then(result => {
      this.setState({ author: result.data })
    })
  }

  render() {
    const { author } = this.state
    return (
      <div>
        {author && (
          <div className="row">
            <div className="col-lg-12">
              <Info author={author} />
            </div>
            <div className="col-lg-12">
              <Articles author={author} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Profile
