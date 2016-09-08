import expect from 'expect';
import * as storeHelpers from './storeHelpers';

let initialState;
let itemId;
let jobs;

beforeEach(() => {
  initialState = {};
  itemId = 1;
  jobs = [
    {id: 1},
    {id: 2}
  ];
});

describe('loadTranslations()', () => {
  it('loads the jobs for a specific id', () => {
    // setup
    let expectedOutput = {
      1: {
        1: {id: 1},
        2: {id: 2}
      }
    };

    // act
    let output = storeHelpers.loadTranslations(initialState, itemId, jobs);

    // assert
    expect(output).toEqual(expectedOutput);
  });
});

describe('updateTranslations()', () => {
  it('updates a job for a specific item', () => {
    // setup
    let job = {id: 1, item_no: 5};
    let state = storeHelpers.loadTranslations(initialState, itemId, jobs);
    let expectedOutput = Object.assign(state[itemId], {1: job});

    // action
    let output = storeHelpers.updateTranslation(state, itemId, job);

    // assertion
    expect(output[itemId]).toEqual(expectedOutput);
  });
});
