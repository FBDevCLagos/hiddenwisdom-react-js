import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Header from './index';

const setup = () => {
  return mount(<Header />)
}

describe('Header Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the navbar comonent', () => {
    expect(wrapper.find('.navbar').length).toEqual(1);
  });


  it('should display site name', () => {
    expect(wrapper.find('.navbar-brand').text()).toEqual('hidden wisdom');
  });

  it('should contain a link to add new proverb', () => {
    expect(wrapper.find('Link').text()).toContain('Add a new proverb');
  });
});
