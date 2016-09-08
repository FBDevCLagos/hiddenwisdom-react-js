import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount, shallow} from 'enzyme'; // eslint-disable-line no-unused-vars
import Proverb from './index';

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
  };
  return shallow(<Proverb {...props} />);
}

describe('<Proverb />', () => {
  it('renders the New Proverb component', () => {
    const wrapper = setup();

    // assertions
    expect(wrapper.find('h3').text().toLowerCase()).toContain('new proverb');
  });
});
