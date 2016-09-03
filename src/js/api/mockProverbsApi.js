import delay from './delay';
import {proverbs} from './data/proverbs';
import {translations} from './data/translations';

/* eslint-disable camelcase */

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

export function proverbWithTranslation(proverbId) {
  let proverbArr = proverbs.filter(proverb => proverb.id === proverbId);
  let translationsArr = translations.filter(job => job.proverb_id === proverbId);
  return Object.assign({}, proverbArr[0], {translations: translationsArr});
}

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (proverb) => {
  return replaceAll(proverb.body.toLowerCase(), ' ', '-');
};

class ProverbApi {
  static getAllProverbs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], proverbs));
      }, delay);
    });
  }

  static getProverb(proverbId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, proverbWithTranslation(proverbId)));
      }, delay);
    });
  }

  static saveProverb(proverb) {
    proverb = Object.assign({}, proverb); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProverbTitleLength = 3;
        if (proverb.title.length < minProverbTitleLength) {
          reject(`Title must be at least ${minProverbTitleLength} characters.`);
        }

        if (proverb.id) {
          const existingProverbIndex = proverbs.findIndex(a => a.id === proverb.id);
          proverbs.splice(existingProverbIndex, 1, proverb);
        } else {
          // Just simulating creation here.
          // The server would generate ids and watchHref's for new proverbs in a real app.
          // Cloning so copy returned is passed by value rather than by reference.
          // proverb.id = generateId(proverb);
          proverbs.push(proverb);
        }

        resolve(proverb);
      }, delay);
    });
  }

  static deleteProverb(proverbId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProverbToDelete = proverbs.findIndex(proverb => {
          return proverb.proverbId === proverbId;
        });
        proverbs.splice(indexOfProverbToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProverbApi;
