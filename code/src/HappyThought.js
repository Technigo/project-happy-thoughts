/* eslint-disable linebreak-style */
import React from 'react';
import moment from 'moment';
// {props.text}

const HappyThought = (props) => {
  return (
    <div className="happy-thought-wrapper">
      <p>{props.text}</p>
      <div className="data-wrapper">
        <div className="likes">
          <p>❤️x{props.hearts}</p>
        </div>
        <div className="timestamp">
          <p>{moment(props.timestamp).startOf('hour').fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default HappyThought;
