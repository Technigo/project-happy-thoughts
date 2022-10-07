import React from 'react';
import moment from 'moment';

const TimeStamp = ({ event }) => {
  return (
    <p className="timestamp">{moment(event.createdAt).fromNow()}</p>

  )
}

export default TimeStamp;