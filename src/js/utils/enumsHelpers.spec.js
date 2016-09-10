import expect from 'expect';
import * as enumsHelpers from './enumsHelpers';

describe('update()', () => {
  it('updates an object with params without data mutation', () => {
    let collection = {
      1: {id: 1},
      2: {id: 2}
    };
    let update = {id: 3};
    let expectedOutput = {
      1: {id: 1},
      2: {id: 2},
      3: {id: 3}
    };
    let newCollection = enumsHelpers.update(collection, update.id, update);
    expect(newCollection).toEqual(expectedOutput);
  });

  it('serializes an object or array by key ' +
      'or id if no key is given', () => {
    let collection = [
      {id: 1},
      {id: 2}
    ];
    let expectedOutput = {
      1: {id: 1},
      2: {id: 2}
    };
    let newCollection = enumsHelpers.serializeByKey(collection);
    expect(newCollection).toEqual(expectedOutput);
  });
});
