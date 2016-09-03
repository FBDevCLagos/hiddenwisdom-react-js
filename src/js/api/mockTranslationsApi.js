import delay from './delay';
import translations from './data/translations';

/* eslint-disable camelcase */

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (translation) => {
  return replaceAll(translation.translation_no.toLowerCase(), ' ', '-');
};

class TranslationApi {
  static getAllTranslations() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], translations));
      }, delay);
    });
  }

  static saveTranslation(translation) {
    translation = Object.assign({}, translation); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTranslationTitleLength = 3;
        if (translation.title.length < minTranslationTitleLength) {
          reject(`Title must be at least ${minTranslationTitleLength} characters.`);
        }

        if (translation.id) {
          const existingTranslationIndex = translations.findIndex(a => a.id === translation.id);
          translations.splice(existingTranslationIndex, 1, translation);
        } else {
          // Just simulating creation here.
          // The server would generate ids and watchHref's for new translations in a real app.
          // Cloning so copy returned is passed by value rather than by reference.
          // translation.id = generateId(translation);
          translations.push(translation);
        }

        resolve(translation);
      }, delay);
    });
  }

  static deleteTranslation(translationId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTranslationToDelete = translations.findIndex(translation => {
          return translation.translationId === translationId;
        });
        translations.splice(indexOfTranslationToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TranslationApi;
