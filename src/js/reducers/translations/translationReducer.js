import types from '../../actions/actionTypes';
import * as storeHelpers from './storeHelpers';
import initialState from '../initialState';

/* eslint-disable camelcase */
/**
* @param {Object} state: current application state
* @param {Object} action object of translations (unserialized)
* @return {object} new serialized translation object
*/
export default function translationReducer(state = initialState.translations, action) {
  switch (action.type) {
    case types.LOAD_TRANSLATIONS_SUCCESS:
      return storeHelpers.loadTranslations(state, action.itemId, action.translations);

    case types.LOAD_PROVERB_SUCCESS: {
      const { item_no, translations } = action.proverb;
      return storeHelpers.loadTranslations(state, item_no, translations);
    }

    case types.UPDATE_TRANSLATION_SUCCESS:
      return storeHelpers.updateTranslation(state, action.itemId, action.translation);

    default:
      return state;
  }
}
