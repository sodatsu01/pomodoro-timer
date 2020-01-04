/* eslint-env jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StartButton from 'src/renderer/components/StartButton';

Enzyme.configure({ adapter: new Adapter() });

describe('StartButton', () => {
  const wrapper = mount(<StartButton />);
  it('has a class named start ', () => {
    expect(wrapper.exists('.start')).toBe(true); // TODO: Buttonタグの確認
  });
  it('returns state.play=start by default', () => {
    expect(wrapper.state().play).toBe('start');
  });
  it('makes state.play=stop when it be clicked', () => {
    expect(wrapper.state().play).toBe('start');
    wrapper.find('button').simulate('click');
    expect(wrapper.state().play).toBe('stop');
  });
});
