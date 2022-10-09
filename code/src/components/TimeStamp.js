import React from 'react';
import moment from 'moment';

const TimeStamp = ({ event }) => {
  return (
    <div className="time-grid">
      {/* Adds the timestamp to the messages in the list with the help of
      the library "moment" */}
      <p className="timestamp">{moment(event.createdAt).fromNow()}</p>
    </div>
  )
}

export default TimeStamp;