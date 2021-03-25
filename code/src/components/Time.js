import React from 'react';
import moment from 'moment';

const Time = (props) => {
  return (
    <div className="time-container">
      <p> {moment(props.time).fromNow()}</p>
    </div>
  )
};
export default Time;