import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import HomePage from './Index';

const setup = () => {
  return shallow(<HomePage />)
}

describe('HomePage Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the Homepage component', () => {
    expect(wrapper.find('.home').length).toEqual(1);
  });
});
