import CVar from '../config/CookieVariables.js';
import assign from 'object-assign';
import cookieAdapter from './cookieAdapter';

const JSON_FORMAT = 'json'

class CurrentUser {

  /**
   * @returns {Object} current user in JSON
   */
  static get() {
    return cookieAdapter.get(CVar.currentUser, JSON_FORMAT) || {};
  }

  /**
   * @param state : current user details in store
   * @param user : current user details with updates
   * @returns currentUser as contained in the store after update
   */
  static set(state, user) {
    if (user === undefined || user.user === undefined) return state;

    let updatedUser = assign({}, state, user.user);
    cookieAdapter.set(CVar.currentUser, updatedUser);
    this.setUserToken(user.token)
    this.setLoginStatus();

    return this.get();
  }

  static userToken() {
    return cookieAdapter.get(CVar.userToken)
  }

  /**
   * @param userToken : string
   */
  static setUserToken(userToken) {
    cookieAdapter.set(CVar.userToken, userToken)
  }

  static getAccessToken() {
    return cookieAdapter.get(CVar.accessToken)
  }

  /**
   * @param accessToken : string
   */
  static setAccessToken(accessToken) {
    cookieAdapter.set(CVar.accessToken, accessToken)
  }

  /**
   * @returns boolean
   */
  static loggedIn() {
    return cookieAdapter.get(CVar.userLoggedIn);
  }

  static setLoginStatus() {
    cookieAdapter.set(CVar.userLoggedIn, (this.userToken() !== undefined));
  }

  /**
   * @returns connected, not_authorised or unknown
   */
  static getFBLoginStatus() {
    return cookieAdapter.get(CVar.userFBLoginStatus);
  }

  static setFBLoginStatus(status) {
    cookieAdapter.set(CVar.userFBLoginStatus, status);
  }

  static logout() {
    cookieAdapter.delete(CVar.currentUser);
    cookieAdapter.delete(CVar.userLoggedIn);
  }

}

export default CurrentUser;
