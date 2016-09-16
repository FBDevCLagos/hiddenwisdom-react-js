import expect from 'expect';
import * as proverbActions from './proverbActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

import Config from '../config/environment';

describe('loadProverbsSuccess', () => {
  describe('Create load Proverbs Action', () => {
    it('should create a LOAD_PROVERBS_SUCCESS action', () => {
      // setup
      const proverbs = [
        {id: 'A1023'}
      ];
      const expectedAction = {
        type: types.default.LOAD_PROVERBS_SUCCESS,
        proverbs
      };

      // actions
      const action = proverbActions.loadProverbsSuccess(proverbs);

      // assertions
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('loadProverbs', function() {
  afterEach(() => {
    nock.cleanAll();
  });
  // this.timeout(15000);
  it('should dispatch a success action on successful API response', done => {
    // setup
    const proverbs = [ {id: 'A1023', body: 'first proverb'} ];

    nock(Config.host)
    .get('/proverbs')
    .reply(200, { proverbs });

    const expectedActions = [
      {type: types.default.LOAD_PROVERBS_SUCCESS, proverbs}
    ];

    // action
    const initialAppState = { proverbs: [] };
    const store = mockStore(initialAppState, expectedActions);

    store.dispatch(
      proverbActions.loadProverbs())
      .then(() => {
        const [ actions ] = store.getActions();
        expect(actions.type).toEqual(types.default.LOAD_PROVERBS_SUCCESS);
        expect(actions.proverbs).toEqual(proverbs);
    });

    done();
  });
});
