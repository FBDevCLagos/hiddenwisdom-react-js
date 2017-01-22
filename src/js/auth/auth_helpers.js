import isEmpty from '../utils/isEmpty';

export function buildCookiePathAndExpiryDate() {
  let currentDate = new Date();
  let expirationDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 3,
    currentDate.getDate(),
    0, 0, 0);
  return {path: '/', expires: expirationDate};
}

export function stringify(objToParse) {
  return (typeof objToParse === 'object') ?
    JSON.stringify(objToParse) :
    objToParse;
}

export function toJson(objToParse) {
  if (isEmpty(objToParse)) { return }
  return typeof objToParse === 'object' ?
    objToParse :
    this.toJson(JSON.parse(objToParse));
}
