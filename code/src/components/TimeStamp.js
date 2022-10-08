import React from 'react';
import moment from 'moment';

const TimeStamp = ({ event }) => {
  return (
    <div className="time-grid">
      <p className="timestamp">{moment(event.createdAt).fromNow()}</p>
    </div>
  )
}

export default TimeStamp;