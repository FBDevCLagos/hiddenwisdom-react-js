import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount, shallow} from 'enzyme'; // eslint-disable-line no-unused-vars
import IndexPage from './IndexPage';

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
    proverbs: {
      1: {id: 1},
      2: {id: 2}
    }
  };
  return shallow(<IndexPage {...props} />);
}

describe('<IndexPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  })

  it('renders the IndexPage component', () => {
    expect(wrapper.find('div.proverbs-index').length).toEqual(1);
    expect(wrapper.find('ProverbCards').length).toEqual(1);
  });
});
