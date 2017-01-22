import {combineReducers} from 'redux';
import proverbs from './proverbs/proverbReducer';
import translations from './translations/translationReducer';
import auth from './auth'
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  proverbs,
  translations,
  auth,
  ajaxCallsInProgress
});

export default rootReducer;
