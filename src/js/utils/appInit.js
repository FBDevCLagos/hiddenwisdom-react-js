import * as proverbActions from '../actions/proverbActions.js';

export function loadData(store) {
  store.dispatch(proverbActions.loadProverbs());
}
