import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount, shallow} from 'enzyme'; // eslint-disable-line no-unused-vars
import {Index} from './Index';

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
  return shallow(<Index {...props} />);
}

describe('<Index />', () => {
  it('renders the Index component', () => {
    const wrapper = setup();

    // assertions
    expect(wrapper.find('IndexPage').length).toEqual(1);
  });
});
