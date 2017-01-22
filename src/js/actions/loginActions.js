import types from './actionTypes';
import webAPI from '../utils/webAPI';

export function loginSuccess(user) {
  return { type: types.LOGIN_USER_SUCCESS, user };
}

export function login(accessToken) {
  return dispatch => {
    return webAPI(`${'/auth/login'}`, 'POST', {access_token: accessToken})
      .then(res => {
        dispatch(loginSuccess(res));
      });
  };
}

export function changeFBLoginStatus(fbLoginMeta) {
  return { type: types.LOAD_FB_LOGIN_META_SUCCESS, fbLoginMeta }
}

export function getFBLoginStatus() {
  return dispatch => {
    return webAPI(`${'/auth/login'}`, 'POST', '')
      .then(res => {
        dispatch(loginSuccess(res));
      });
  };
}


