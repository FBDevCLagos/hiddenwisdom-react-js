import {combineReducers} from 'redux';
import currentUser from './currentUserReducer';
import fbLoginMeta from './fbLoginMetaReducer';

const authReducer = combineReducers({
  currentUser,
  fbLoginMeta
});

export default authReducer;
