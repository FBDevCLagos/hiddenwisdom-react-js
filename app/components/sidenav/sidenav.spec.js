import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import SideNav from './index';

const setup = () => {
  return shallow(<SideNav />)
}

describe('Side Navigation Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('should have a logo div', () => {
    expect(wrapper.find('div.logo').text()).toEqual('Name and Logo');
  });

  it('should have a menu section', () => {
    expect(wrapper.find('div.menu').text()).toContain('Navigation Menu');
    expect(wrapper.find('ul')).toExist();
    expect(wrapper.find('ul > li').length).toBe(4);
  });
});