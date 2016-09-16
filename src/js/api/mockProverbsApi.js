import delay from './delay';
import { proverbs } from './data/proverbs';
import { translations } from './data/translations';

/* eslint-disable camelcase */

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

// This would be performed on the server in a real app. Just stubbing in.
export const generateId = (proverb) => {
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
        const proverb = proverbs.filter(p => p.id.toString() === proverbId)
        resolve(Object.assign({}, proverb));
      }, delay);
    });
  }

  static saveProverb(proverb) {
    proverb = Object.assign({}, proverb); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProverbQuoteLength = 3;
        if (proverb.body.length < minProverbQuoteLength) {
          reject(`Quote must be at least ${minProverbQuoteLength} characters.`);
        }

        if (proverb.id) {
          const existingProverbIndex = proverbs.findIndex(a => a.id === proverb.id);
          proverbs.splice(existingProverbIndex, 1, proverb);
        } else {
          proverb.id = generateId(proverb);
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
          return proverb.id === proverbId;
        });
        proverbs.splice(indexOfProverbToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProverbApi;
