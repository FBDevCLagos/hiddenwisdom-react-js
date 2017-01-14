import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import { mount, shallow } from 'enzyme'; // eslint-disable-line no-unused-vars
import Translations from './Translations';

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
    translations: [
      { id: 1 },
      { id: 2 }
    ]
  };
  return shallow(<Translations {...props} />);
}

describe('<Translations />', () => {
  it('renders a list of Translation(s) component', () => {
    const wrapper = setup();

    // assertions
    expect(wrapper.find('Translation').length).toEqual(2);
  });
});
