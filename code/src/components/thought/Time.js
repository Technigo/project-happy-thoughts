import React from 'react';
import moment from 'moment';

const Time = ({ created }) => {
  return (
    <div className="time">
      <p tabIndex="0">{moment(created).fromNow()}</p>
    </div>
  )
}

export default Time;