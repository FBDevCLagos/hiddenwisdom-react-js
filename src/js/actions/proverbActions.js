import types from './actionTypes';
import webAPI from '../utils/webAPI';
import mockProverbApi from '../api/mockProverbsApi';

/**
* @param {Object} proverbs: object
* @return {Object} containing the action type and data
*/
export function loadProverbsSuccess(proverbs) {
  return { type: types.LOAD_PROVERBS_SUCCESS, proverbs };
}

/**
* @param {Object} proverbs: object
* @return {Object} containing the action type and data
*/
export function loadProverbSuccess(proverb) {
  return { type: types.LOAD_PROVERB_SUCCESS, proverb };
}

/**
* @param {Object} proverbs: key proverbs and value is an array of questions
* @return {Object} containing the action type and proverb
*/
export function updateProverbSuccess(proverb) {
  return { type: types.UPDATE_PROVERB_SUCCESS, proverb };
}

export function loadProverbs() {
  return dispatch => {
    return mockProverbApi.getAllProverbs()
      .then(proverbs => {
        dispatch(loadProverbsSuccess(proverbs));
      });
  };
}

export function loadProverb(proverbId) {
  return dispatch => {
    return mockProverbApi.getProverb(proverbId)
      .then(proverb => {
        dispatch(loadProverbSuccess(proverb));
      });
  };
}
