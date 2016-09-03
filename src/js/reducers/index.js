import {combineReducers} from 'redux';
import proverbs from './proverbs/proverbReducer';
import translations from './translations/translationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  proverbs,
  translations,
  ajaxCallsInProgress
});

export default rootReducer;
