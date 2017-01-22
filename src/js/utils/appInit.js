import * as proverbActions from '../actions/proverbActions.js';
import fBLoginHandler from '../lib/facebook/fb_login_handler';

function loadData(store) {
  store.dispatch(proverbActions.loadProverbs());
}

function appInit (store) {
  (new fBLoginHandler(store)).loadInitScript();
  loadData(store)
}

export default appInit;
