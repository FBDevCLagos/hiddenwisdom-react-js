import fbLoginScript from './fb_login_script';
import Auth from '../../auth';
// for some reason, es6 import failed ...
var loginActions = require('../../actions/loginActions'); //eslint-disable-line no-var

class HandleFbLogin {
  constructor(store) {
    this.store = store;
    this.setFBLoginMeta = this.setFBLoginMeta.bind(this);
  }

  loadInitScript() {
    fbLoginScript(this.setFBLoginMeta)
  }

  setFBLoginMeta(response) {
    this.store.dispatch(loginActions.changeFBLoginStatus(response));
    this.loginUserConnectedToFB(response.authResponse);
  }

  loginUserConnectedToFB(authResponse) {
    if (!authResponse) return;
    this.store.dispatch(loginActions.login(authResponse))
  }
}

export default HandleFbLogin;
