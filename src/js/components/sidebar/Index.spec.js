import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Sidebar from './index';

const setup = () => {
  return shallow(<Sidebar />)
}

describe('Side Navigation Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });


  it('should have a menu section', () => {
    let firstSidebarLink = wrapper
      .find('.sidebar-elements li').first();

    expect(firstSidebarLink.text()).toContain('Menu');
    expect(wrapper.find('ul')).toExist();
    expect(wrapper.find('ul > li').length).toBe(5);
  });
});
