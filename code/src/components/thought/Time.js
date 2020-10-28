import React from 'react';
import moment from 'moment';

const Time = (props) => {
  return (
    <div className="time">
      <p>{moment(props.created).fromNow()}</p>
    </div>
  )
}

export default Time;