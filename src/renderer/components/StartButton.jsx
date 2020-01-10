// 表示名の切替はここがじゃなくて、stateを持ってるPomodoroTimer側で制御する？
import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function StartButton(props) {
  const { onClick, isStart } = props;
  const message = isStart ? 'stop' : 'start';
  return (
    <Button
      variant="contained"
      color="primary"
      className="start"
      onClick={() => onClick()}
    >
      {message}
    </Button>
  );
}

StartButton.propTypes = {
  isStart: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
