import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import { mount, shallow } from 'enzyme'; // eslint-disable-line no-unused-vars
import ProverbCard from './ProverbCard';

const proverb = {
  id: 1,
  body: "A dead person shall have all the sleep necessary.",
  language: "en",
  tags: ["peace"],
  translations: [
    {
      id: 1,
      body: "Ura ga-eju onye nwuru anwu afo",
      language: "ig"
    }
  ]
}

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
    proverb
  };
  return mount(<ProverbCard {...props} />);
}

describe('<ProverbCard />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  })

  it('renders the ProverbCard component', () => {
    expect(wrapper.find('.proverb-card').length).toEqual(1);
    expect(wrapper.find('.card-header').text()).toEqual(proverb.body);
  });

  it('renders the <Translations /> component', () => {
    expect(wrapper.find('Translations').length).toEqual(1)
    expect(wrapper.find('.card-blockquote > p').text()).toEqual(proverb.translations[0].body);
  })
});
