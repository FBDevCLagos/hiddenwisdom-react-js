import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import { omit } from 'underscore';
import Config from '../config/environment';
import * as proverbActions from './proverbActions';
import * as types from './actionTypes';

const proverb = { id: 'A1023', body: 'Testing proverb' };
const proverbs = [ proverb ]; 

describe('Proverb actions', () => {

  it('should create a LOAD_PROVERBS_SUCCESS action', () => {

    const expectedAction = {
      type: types.default.LOAD_PROVERBS_SUCCESS,
      proverbs
    };

    // actions
    const action = proverbActions.loadProverbsSuccess(proverbs);

    // assertions
    expect(action).toEqual(expectedAction);
  }); 

  it('should create a UPDATE_PROVERB_SUCCESS action', () => {
    // setup
    const expectedUpdateAction = {
      type: types.default.UPDATE_PROVERB_SUCCESS,
      proverb
    };

    // actions
    const action = proverbActions.updateProverbSuccess(proverb);

    // assertions
    expect(action).toEqual(expectedUpdateAction);
  });

  describe('Proverb action thunks', function() {

    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    const initialAppState = { proverbs: [], proverb: {} };

    afterEach(() => {
      nock.cleanAll();
    });

    // this.timeout(15000);
    describe('loadProverbs', () => {
      it('should dispatch a success action on successful API response', done => {

        nock(Config.host)
        .get('/proverbs')
        .reply(200, proverbs);

        const expectedActions = [
          {type: types.default.LOAD_PROVERBS_SUCCESS, proverbs}
        ];

        // action
        const store = mockStore(initialAppState, expectedActions);
        store.dispatch(proverbActions.loadProverbs())
          .then(() => {
            const [actions] = store.getActions();
            expect(actions.type).toEqual(types.default.LOAD_PROVERBS_SUCCESS);
          });

          done();
      }); 
    })

    describe('saveProverbs', () => {
      it('should dispatch a success action on successful API response', done => {

        const expectedActions = [
          {type: types.default.UPDATE_PROVERB_SUCCESS, proverb}
        ];
        
        // action
        const store = mockStore(initialAppState, expectedActions);
        const [actions] = store.getActions();
        store.dispatch(proverbActions.saveProverb(proverb))
          .then(() => {
            expect(actions.type).toEqual(types.default.UPDATE_PROVERB_SUCCESS);
          });
          
          done();
      }); 
    })    
  });  

});
