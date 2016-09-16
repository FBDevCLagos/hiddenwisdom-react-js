import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import { mount, shallow } from 'enzyme'; // eslint-disable-line no-unused-vars
import Translation from './Translation';

let translation = {
  id: 1,
  body: 'the body',
  language: 'Igbo'
}

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
    translation
  };
  return shallow(<Translation {...props} />);
}

describe('<Translation />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  })
  it('renders the Translation component', () => {
    expect(wrapper.find('.card-block').length).toEqual(1);
    expect(wrapper.find('.card-blockquote > p').text()).toEqual(translation.body);
    expect(wrapper.find('cite').text()).toEqual('Igbo');
  });
});
