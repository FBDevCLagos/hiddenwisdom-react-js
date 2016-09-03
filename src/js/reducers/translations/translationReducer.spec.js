import expect from 'expect';
import translationReducer from './translationReducer';
import * as actions from '../../actions/translationActions';

describe('Translation Reducer Test', () => {
  it('should load translations when passed LOAD_TRANSLATIONS_SUCCESS', () => {
    const initialState = {};
    const itemId = 1;
    const translations = [
      {id: 'A12'},
      {id: 'B23'}
    ];
    const expectedState = {
      1: {
        A12: {id: 'A12'},
        B23: {id: 'B23'}
      }
    };
    const action = actions.loadTranslationsSuccess(itemId, translations);
    // action
    const newState = translationReducer(initialState, action);

    // assertion
    expect(newState).toEqual(expectedState);
  });

  it("should add a new translation when passed UPDATE_TRANSLATION_SUCCESS" +
    " if translation doesn't already exist in store", () => {
    const itemId = 1;
    const initialState = {
      1: {
        A12: {id: 'A12'},
        B23: {id: 'B23'}
      }
    };
    const newTranslation = {id: 'C'};
    const action = actions.updateTranslationSuccess(itemId, newTranslation);

    // action
    const newState = translationReducer(initialState, action);
    const updatedProverbTranslation = newState[itemId];

    // assert
    expect(Object.keys(updatedProverbTranslation).length).toEqual(3);
    expect(updatedProverbTranslation['A12'].id).toEqual('A12');
    expect(updatedProverbTranslation['C'].id).toEqual('C');
  });

  it('should update translation when passed UPDATE_TRANSLATION_SUCCESS', () => {
    const initialState = {
      1: {
        A12: {id: 'A12'},
        B23: {id: 'B23'}
      }
    };
    const itemId = 1;
    const translation = {id: 'B23', labor_cost: 34};
    const action = actions.updateTranslationSuccess(itemId, translation);

    // action
    const updatedState = translationReducer(initialState, action);
    const updatedProverbTranslation = updatedState[itemId];

    // assertions
    expect(Object.keys(updatedProverbTranslation).length).toEqual(2);
    expect(updatedProverbTranslation[translation.id].labor_cost).toEqual(34);
  });
});
