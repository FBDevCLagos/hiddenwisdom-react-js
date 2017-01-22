import types from '../../actions/actionTypes';
import initialState from '../initialState';
import Auth from '../../auth/index';

export default function currentUserReducer(state = initialState.auth.currentUser, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return Auth.login(state, action.user);

    case types.LOGOUT_USER_SUCCESS:
      Auth.logoutUser();
      return state;

    default:
      return state;
  }
}
