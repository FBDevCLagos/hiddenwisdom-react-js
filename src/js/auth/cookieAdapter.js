import *  as authHelpers from './auth_helpers';
import assign from 'object-assign';
import cookie from 'js-cookie';
import CVar from '../config/CookieVariables.js';

class CookieAdapter {

  /**
   * @param {Object} key as stored in the cookie
   * @param {Object} format: either json or string
   * @return {Object} json or string value of
   */
  static get(key, format) {
    return format == 'json' ?
      authHelpers.toJson(cookie.get(key)) :
      cookie.get(key);
  }

  /**
   * @param {object} key as stored in the cookie
   * @param {object} value: to be set in cookie
   */
  static set(key, value) {
    cookie.set(key, authHelpers.stringify(value));
  }

  /**
   * @param {object} key as stored in the cookie
   */
  static delete(key) {
    cookie.remove(key);
  }
}

export default CookieAdapter;
