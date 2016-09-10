import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount, shallow} from 'enzyme'; // eslint-disable-line no-unused-vars
import About from './Index';

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
  };
  return shallow(<About {...props} />);
}

describe('<About />', () => {
  it('renders the About Index component', () => {
    const wrapper = setup();

    // assertions
    expect(wrapper.find('h3').text().toLowerCase()).toContain('about');
  });
});
