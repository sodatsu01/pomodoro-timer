/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PomodoroTimer from 'src/renderer/components/PomodoroTimer';

Enzyme.configure({ adapter: new Adapter() });

describe('Timer', () => {
  it('shows 25mins by default', () => {
    expect(shallow(<PomodoroTimer />).find('h3').text()).toBe('25:00');
  });
  it('start countdown 1s by 1s when state.play=true', () => {
    jest.useFakeTimers();
    const wrapper = mount(<PomodoroTimer />);
    expect(wrapper.find('h3').text()).toBe('25:00');
    wrapper.find('button').simulate('click');
    jest.advanceTimersByTime(1000);
    expect(wrapper.find('h3').text()).toBe('24:59');
  });
});
