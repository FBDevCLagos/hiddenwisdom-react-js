import types from './actionTypes';
import webAPI from '../utils/webAPI';
import mockTranslationApi from '../api/mockTranslationsApi';

/**
* @param {Object} itemId: key translations and value is an array of questions
* @param {Object} translations: key translations and value is an array of questions
* @return {Object} containing the action type and data
*/
export function loadTranslationsSuccess(itemId, translations) {
  return { type: types.LOAD_TRANSLATIONS_SUCCESS, itemId, translations };
}

/**
* @param {Object} translations: key translations and value is an array of questions
* @return {Object} containing the action type and translation
*/
export function updateTranslationSuccess(itemId, translation) {
  return { type: types.UPDATE_TRANSLATION_SUCCESS, itemId, translation };
}

export function loadTranslations() {
  return dispatch => {
    return mockTranslationApi.getAllTranslations()
      .then(translations => {
        dispatch(loadTranslationsSuccess(translations));
      });
  };
}
