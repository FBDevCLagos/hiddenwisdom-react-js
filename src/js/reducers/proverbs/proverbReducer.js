import types from '../../actions/actionTypes';
import * as storeHelpers from './storeHelpers';
import initialState from '../initialState';

export default function proverbReducer(state = initialState.proverbs, action) {
  switch (action.type) {
    case types.LOAD_PROVERBS_SUCCESS:
      return storeHelpers.loadProverbs(state, action.proverbs);

    case types.LOAD_PROVERB_SUCCESS:
      return storeHelpers.updateProverb(state, action.proverb);

    case types.UPDATE_PROVERB_SUCCESS:
      return storeHelpers.updateProverb(state, action.proverb);    

    default:
      return state;
  }
}
