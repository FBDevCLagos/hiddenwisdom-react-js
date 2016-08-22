import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import HomePage from './index';

function setup(saving) {
  return shallow(<HomePage />)
}

describe('visit home page', () => {
  it('shows the home page', () => {
    const wrapper = setup(false);
    expect(wrapper.find('h2').text()).toEqual('Revealing Hidden Wisdom');
  });
});