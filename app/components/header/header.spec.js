import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Header from './index';

const setup = () => {
  return shallow(<Header />)
}

describe('Header Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('has a placeholder span', () => {
    expect(wrapper.find('span').text()).toEqual('This is the Header Section Placeholder');
  });
});