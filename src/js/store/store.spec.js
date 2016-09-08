import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as proverbActions from '../actions/proverbActions';

describe('Store', () => {
  it('should load in an array of proverbs', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const proverbs = [
      {id: "A1023"},
      {id: "A1024"}
    ];

    // act
    const action = proverbActions.loadProverbsSuccess(proverbs);
    store.dispatch(action);

    // assert
    const proverbsInStore = store.getState().proverbs;
    expect(Object.keys(proverbsInStore).length).toEqual(2);
    expect(proverbsInStore[proverbs[0].id]).toEqual(proverbs[0]);
  });

  it('should handle creating proverbs', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const proverb = {id: "A1023"};

    // act
    const action = proverbActions.updateProverbSuccess(proverb);
    store.dispatch(action);

    // assert
    const newState = store.getState().proverbs;
    expect(newState[proverb.id].id).toEqual(proverb.id);
  });
});
