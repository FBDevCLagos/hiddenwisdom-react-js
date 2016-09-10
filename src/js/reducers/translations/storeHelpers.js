import * as enums from '../../utils/enumsHelpers.js';
import assign from 'object-assign';

/* eslint-disable camelcase */

/**
* @param {Object} state: current application state
* @param {Object} proverbId: id of the proverb
* @param {Object} translations object of translations (unserialized)
* @return {object} new serialized translation object
*/
export function loadTranslations(state, proverbId, translations) {
  return enums.update(state, proverbId, enums.serializeByKey(translations));
}

/**
* @param {Object} translations object of translations currently in state
* @param {Object} id of translation to edit
* @return {object} translations state with the specific translation set to editing
*/
export function edit(translations, id) {
  return update(translations, translations[id], true);
}

/**
* @param {Object} translations object of translations currently in state
* @param {Object} updatedTranslation of translation to edit
* @param {Object} editing: Boolean to show if edit status is to be set to editing
* @return {object} new serialized translation object
*/
function update(translations, proverb, editing) {
  return enums.update(translations, proverb.id, proverb.translations);
}

/**
* @param {Object} translations object of translations currently in state
* @param {Object} translation object with most recent updates
* @return {object} state with updates having any editing status removed
*/
export function updateTranslation(translations, proverbId, translation) {
  let existingTranslation = translations[proverbId] || {};
  let proverbTranslations = enums.update(existingTranslation, translation.id, translation);
  return enums.update(translations, proverbId, proverbTranslations);
}
