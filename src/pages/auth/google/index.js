import React, {useState} from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ dispatch, user }) => ({
  user,
  dispatch
})

const GoogleLogin = ({dispatch}) => {

  const [isSignedIn, setSignedIn] = useState(false);

  const gSignIn = () => {
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: '954240969904-s2np4orushqhv8kf8attpekc1sf78lej.apps.googleusercontent.com'
      })
      auth2.then(() => {setSignedIn(auth2.isSignedIn.get());});
    });

    window.gapi.load('signin2', function loadSignin2() {
      // Method 3: render a sign in button
      // using this method will show Signed In if the user is already signed in
      const opts = {
        width: 100,
        height: 30,
        client_id: '954240969904-s2np4orushqhv8kf8attpekc1sf78lej.apps.googleusercontent.com',
        onsuccess: onSuccess
      }
      window.gapi.signin2.render('g-signin-button', opts)
    })
  };

  const onSuccess = (googleUser) => {
    const gToken = googleUser.getAuthResponse().id_token;
    setSignedIn(true)
    dispatch({
      type: 'user/GOOGLE_LOGIN',
      payload: {gToken},
    })
  }

  return (

    <a className="btn btn-outline-default width-150" onClick={gSignIn} href="javascript:void(0)">
      <i className="fa fa-google mr-2" /> Google {isSignedIn}
      <div id="g-signin-button" className="d-none" />
    </a>
  )
}

export default connect(mapStateToProps)(GoogleLogin)
