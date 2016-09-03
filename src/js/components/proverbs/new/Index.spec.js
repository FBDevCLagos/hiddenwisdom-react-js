import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount, shallow} from 'enzyme'; // eslint-disable-line no-unused-vars
import Index from './Index';

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
  };
  return shallow(<Index {...props} />);
}

describe('<Index />', () => {
  it('renders the New Index component', () => {
    const wrapper = setup();

    // assertions
    expect(wrapper.find('h3').text().toLowerCase()).toContain('new proverb');
  });
});
