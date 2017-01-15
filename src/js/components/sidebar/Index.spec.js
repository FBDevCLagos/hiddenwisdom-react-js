import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import { Sidebar } from './Index';

const setup = () => {
  return shallow(<Sidebar />)
}

describe('Side Navigation Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });


  it('should have a menu section', () => {
    expect(wrapper.find('ul')).toExist();
  });
});
