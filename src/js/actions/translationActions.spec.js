import expect from 'expect';
import * as translationActions from './translationActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

import Config from '../config/environment';

describe('loadTranslationsSuccess', () => {
  describe('Create load Translations Action', () => {
    it('should create a LOAD_TRANSLATION_SUCCESS action', () => {
      // setup
      const translations = [
        {id: 'A1023'}
      ];
      const itemId = 1;
      const expectedAction = {
        type: types.default.LOAD_TRANSLATIONS_SUCCESS,
        itemId,
        translations
      };

      // actions
      const action = translationActions.loadTranslationsSuccess(itemId, translations);

      // assertions
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('loadTranslations', function() {
  afterEach(() => {
    nock.cleanAll();
  });
  // this.timeout(15000);
  it('should dispatch a success action on successful API response', done => {
    // setup
    const translations = [{id: 'A1023', name: 'first translation'}];

    nock(Config.host)
    .get('/translations/recent')
    .reply(200, {body: translations});

    const expectedActions = [
      {type: types.LOAD_TRANSLATION_SUCCESS, translations}
    ];

    // action
    const initialAppState = {tags: []};
    const store = mockStore(initialAppState, expectedActions);

    store.dispatch(translationActions.loadTranslations()).then(() => {
      const actions = store.getActions();
      // expect(actions[0].type).toEqual(types.default.LOAD_TRANSLATION_SUCCESS);
      // expect(actions[0].translations).toEqual(translations);
    });

    done();
  });
});
