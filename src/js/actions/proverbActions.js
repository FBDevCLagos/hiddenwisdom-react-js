import types from './actionTypes';
import webAPI from '../utils/webAPI';
import mockProverbApi from '../api/mockProverbsApi';

/**
* @param array of proverbs
* @return {Object} containing the action type and data
*/
export function loadProverbsSuccess(proverbs) {
  return { type: types.LOAD_PROVERBS_SUCCESS, proverbs };
}

/**
* @param {Object} proverb
* @return {Object} containing the action type and proverb
*/
export function updateProverbSuccess(proverb) {
  return { type: types.UPDATE_PROVERB_SUCCESS, proverb };
}

export function loadProverbs(locale) {
  const defaultLocale = locale ? locale : 'en';
  return dispatch => {
    return webAPI(`${'/' + defaultLocale + '/proverbs'}`, 'GET', '')
      .then(res => {
        dispatch(loadProverbsSuccess(res));
      });
  };
}

export function saveProverb(proverb) {
  const type = proverb.id ? 'PUT' : 'POST';
  const rootUrl = `/proverbs`;
  const url = proverb.id ? `${rootUrl + '/' + proverb.id}` : rootUrl;

  return (dispatch) => {
    return webAPI(url, type, proverb)
      .then(res => {
        dispatch(updateProverbSuccess(res))       
      })
  };
}
