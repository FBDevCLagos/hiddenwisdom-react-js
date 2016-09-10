import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import {loadData} from './appInit';

describe('loadData()', () => {
  it('should load in an array of items from API', () => {
    // arrange
    // const store = createStore(rootReducer, initialState);

    // act
    // loadData(store);

    // assert
    // const actual = store.getState().items;
    // expect(Object.keys(actual.items).length).toEqual(2);
    // expect(actual.items[items[0].id]).toEqual(items[0]);
  });
});
