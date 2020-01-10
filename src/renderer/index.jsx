import React from 'react';
import { render } from 'react-dom';
import PomodoroTimer from './components/PomodoroTimer';

require('./style/styles.scss');

render(React.createElement(PomodoroTimer), document.getElementById('root'));
