import * as enums from '../../utils/enumsHelpers.js';
import assign from 'object-assign';
import CurrentUser from '../../auth/currentUser';

/**
 * @param {Object} state: current application state. Most likely empty though
 * @param {Object} user object of proverbs (unserialized)
 * @return {object} serialized proverb object
 */
export function loadCurrentUser(state, user) {
  return assign({}, state, user)
}

/**
 * @param {Object} state: current application state. Most likely empty though
 * @param {Object} meta {userID, app_id}
 * @return {object} updated login meta data
 */
export function loadFBLoginMeta(state, meta) {
  updateCurrentUserInCookie(meta);
  return assign({}, state, meta);
}

function updateCurrentUserInCookie({authResponse, status}) {
  CurrentUser.setFBLoginStatus(status)
}
