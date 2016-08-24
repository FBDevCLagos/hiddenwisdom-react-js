import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import HomePage from './index';

const setup = () => {
  return shallow(<HomePage />)
}

describe('HomePage Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('has a header title and span', () => {
    expect(wrapper.find('h2').text()).toEqual('Revealing Hidden Wisdom');
    expect(wrapper.find('.home > div').text()).toEqual('Easy lies the head that wear the crown');
  });
});