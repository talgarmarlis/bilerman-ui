// import { accountService } from 'services';
import config from "config";

// eslint-disable-next-line import/prefer-default-export
export function initFacebookSdk() {
  return new Promise(() => { // resolve
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function init() {
      window.FB.init({
        appId: config.FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v8.0'
      });

      // auto authenticate with the api if already logged in with facebook
      // window.FB.getLoginStatus(({ authResponse }) => {
      //   if (authResponse) {
      //     console.log(authResponse)
      //     accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
      //   } else {
      //     resolve();
      //   }
      // });
    };

    // load facebook sdk script
    (function loadSDK(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      const js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
}
