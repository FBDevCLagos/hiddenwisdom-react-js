import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount, shallow} from 'enzyme'; // eslint-disable-line no-unused-vars
import App from './App';

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
    children: <div />
  };
  return shallow(<App {...props} />);
}

describe('<App />', () => {
  it('renders the App component', () => {
    const wrapper = setup();

    // assertions
    expect(wrapper.find('.wrapper').length).toEqual(1);
  });
});
