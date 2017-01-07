import expect from 'expect';
import proverbReducer from './proverbReducer';
import * as actions from '../../actions/proverbActions';

describe('Proverb Reducer Test', () => {
  it('should load proverbs when passed LOAD_PROVERBS_SUCCESS', () => {
    const initialState = {};
    const proverbs = [
      {id: 1},
      {id: 2}
    ];
    const expectedState = {
      1: {id: 1},
      2: {id: 2}
    };
    const action = actions.loadProverbsSuccess(proverbs);

    // action
    const newState = proverbReducer(initialState, action);

    // assertion
    expect(newState).toEqual(expectedState);
  });

  it('should add a new proverb when passed UPDATE_PROVERB_SUCCESS' +
    ' if proverb doesn\'t already exist in store', () => {
    const initialState = {
      1: {id: 1},
      2: {id: 2}
    };
    const newProverb = {id: 'C'};

    const action = actions.updateProverbSuccess(newProverb);

    // action
    const newState = proverbReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(3);
    expect(newState[1].id).toEqual(1);
    expect(newState[2].id).toEqual(2);
  });

  it('should update proverb when passed UPDATE_PROVERB_SUCCESS', () => {
    const initialState = {
      1: {id: 1},
      2: {id: 2}
    };
    const proverb = {id: 2, labor_cost: 34};
    const action = actions.updateProverbSuccess(proverb);

    // action
    const updatedState = proverbReducer(initialState, action);

    // assertions
    expect(Object.keys(updatedState).length).toEqual(2);
    expect(updatedState[proverb.id].labor_cost).toEqual(34);
  });

});
