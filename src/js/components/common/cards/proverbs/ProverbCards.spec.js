import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import { mount, shallow } from 'enzyme'; // eslint-disable-line no-unused-vars
import ProverbCards from './ProverbCards';

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
    proverbs: {
      1: { id: 1 },
      2: { id: 2 }
    }
  };
  return shallow(<ProverbCards {...props} />);
}

describe('<ProverbCards />', () => {
  it('renders the ProverbCards component', () => {
    const wrapper = setup();

    // assertions
    expect(wrapper.find('ProverbCard').length).toEqual(2);
  });
});
