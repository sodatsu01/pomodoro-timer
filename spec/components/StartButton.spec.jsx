/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StartButton from '../../src/components/StartButton';

Enzyme.configure({ adapter: new Adapter() });

describe('StartButton', () => {
  it('has a class named start ', () => {
    expect(shallow(<StartButton />).exists('.start')).toBe(true); // TODO: Buttonタグの確認
  });
  it('returns state.play=false by default', () => {
  });
});
