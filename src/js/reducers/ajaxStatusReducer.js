import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

function ajaxCallEnded(type) {
  return (type == 'AJAX_CALL_ERROR' || actionTypeEndsInSuccess(type));
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (ajaxCallEnded(action.type)) {
    return state - 1;
  }
  return state;
}
