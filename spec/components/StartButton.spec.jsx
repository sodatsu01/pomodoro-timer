/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StartButton from '../../src/components/StartButton';

Enzyme.configure({ adapter: new Adapter() });

describe('StartButton', () => {
  const wrapper = mount(<StartButton />);
  it('has a class named start ', () => {
    expect(wrapper.exists('.start')).toBe(true); // TODO: Buttonタグの確認
  });
  it('returns state.play=false by default', () => {
    expect(wrapper.state().play).toBe(false);
  });
  it('makes state.play=true when it be clicked', () => {
    expect(wrapper.state().play).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().play).toBe(true);
  })
});
