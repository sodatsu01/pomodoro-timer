/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PomodoroTimer from '../../src/components/PomodoroTimer';

Enzyme.configure({ adapter: new Adapter() });

describe('Timer', () => {
  it('shows 25mins by default', () => {
    expect(shallow(<PomodoroTimer />).text()).toBe('25:00');
  });
});
