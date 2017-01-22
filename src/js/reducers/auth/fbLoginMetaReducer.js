import types from '../../actions/actionTypes';
import * as storeHelpers from './storeHelpers';
import initialState from '../initialState';

export default function loginReducer(state = initialState.auth.fbLoginMeta, action) {
  switch (action.type) {
    case types.LOAD_FB_LOGIN_META_SUCCESS:
      return storeHelpers.loadFBLoginMeta(state, action.fbLoginMeta);

    default:
      return state;
  }
}
