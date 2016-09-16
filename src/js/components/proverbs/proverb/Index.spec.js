import React from 'react'; // eslint-disable-line no-unused-vars
import { proverbs } from '../../../api/data/proverbs';
import expect, { createSpy, spyOn } from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme'; // eslint-disable-line no-unused-vars
import Proverb from './Index';
import ProverbForm from './ProverbForm';

/**
* @return {Func} A shallow dom for tests
*/

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = { proverbs: [] };
const store = mockStore(initialState);

const actions = {
  loadProverbs : () => {},
  saveProverb  : () => {}
};

const setUp = () => {
  const [proverb] = proverbs;
  const props = {
    proverb,
    params       : { proverbId: "1" },
    loadProverbs : spyOn(actions, 'loadProverbs'),
    saveProverb  : spyOn(actions, 'saveProverb')  
  };

  return mount(
    <Provider store={store}>
      <Proverb {...props} />
    </Provider>
  );
}

describe('<Proverb /> container', () => {
  let ProverbFormComponent, ProverbCompnent;

  beforeEach(() => {
    const wrapper = setUp();
    ProverbCompnent = wrapper.find(Proverb);
    ProverbFormComponent = wrapper.find(ProverbForm);
  });

  it('should render the Proverb component', () => {

    // assertions
    expect(ProverbFormComponent).toBeTruthy();
  });
  
  it('should contain a Proverb Form', () => {

    // assertions
    expect(ProverbFormComponent).toBeTruthy();
  });
});
