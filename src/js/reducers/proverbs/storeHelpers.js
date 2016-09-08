import * as enums from '../../utils/enumsHelpers.js';
import assign from 'object-assign';

/* eslint-disable camelcase */

/**
* @param {Object} state: current application state. Most likely empty though
* @param {Object} proverbs object of proverbs (unserialized)
* @return {object} new serialized proverb object
*/
export function loadProverbs(state, proverbs) {
  return assign({}, state, enums.serializeByKey(proverbs));
}

/**
* @param {Object} proverbs object of proverbs currently in state
* @param {Object} id of proverb to edit
* @return {object} proverbs state with the specific proverb set to editing
*/
export function edit(proverbs, id) {
  return update(proverbs, proverbs[id], true);
}

/**
* @param {Object} proverbs object of proverbs currently in state
* @param {Object} updatedProverb of proverb to edit
* @param {Object} editing: Boolean to show if edit status is to be set to editing
* @return {object} new serialized proverb object
*/
function update(proverbs, updatedProverb, editing) {
  return enums.update(proverbs, updatedProverb.id, updatedProverb, editing);
}

/**
* @param {Object} proverbs object of proverbs currently in state
* @param {Object} proverb object with most recent updates
* @return {object} state with updates having any editing status removed
*/
export function updateProverb(proverbs, proverb) {
  return update(proverbs, assign({}, proverb, {editing: null}));
}
