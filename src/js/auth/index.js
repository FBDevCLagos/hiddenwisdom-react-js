import CVar from '../config/CookieVariables.js';
import CurrentUser from './currentUser';
import assign from 'object-assign';

import cookie from 'js-cookie';

class Auth {
  constructor(currentUserClass = CurrentUser) {
    this.currentUser = currentUserClass;
  }

  /**
   * sets a user in the cookie,
   * sets loggedIn status to true if successful
   * @param state : current value of the user object
   * @param user  : user as returned by api
   * @return user object
   */
  login(state, user) {
    return this.currentUser.set(state, user)
  }

  /**
   * deletes a user from the cookie
   * removes the userLoggedIn key from the cookie
   */
  logout() {
    this.currentUser.logout();
  }

  /**
   * @returns {string} the user access token from facebook
   */
  getUserToken() {
    return this.currentUser.userToken();
  }

  /**
   * sets the access token from facebook in the cookie
   * @param accessToken
   */
  setUserAccessToken(accessToken) {
    this.currentUser.setAccessToken(accessToken)
  }

  /**
   * @returns {boolean}
   */
  userLoggedIn() {
    return this.currentUser.loggedIn();
  }

}

export default new Auth();
