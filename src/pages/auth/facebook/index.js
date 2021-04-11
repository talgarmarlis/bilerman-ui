import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ user, dispatch }) => ({
  user,
  dispatch
})

const FacebookLogin = ({ dispatch }) => {

  const login = values => {
    dispatch({
      type: 'user/FB_LOGIN',
      payload: values,
    })
  }

  const fbLogin = () => {
    // login with facebook then authenticate with the API to get a JWT auth token
    window.FB.login(function fbAuthenticate(response) {
      console.log(response)
      if (response.status === 'connected') {
        // Logged into your webpage and Facebook.
        login(response.authResponse)
      } else {
        // The person is not logged into your webpage or we are unable to tell.
      }
    }, {scope: 'email'});
  }

  return (
    <a className="btn btn-outline-default width-150" onClick={fbLogin} href="javascript:void(0)">
      <i className="fa fa-facebook mr-2" /> Facebook
    </a>
  )
}

export default connect(mapStateToProps)(FacebookLogin)
