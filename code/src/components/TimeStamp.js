import React from 'react';

const TimeStamp = ({ event }) => {
  const time = new Date(event.createdAt);
  const timeStamp = time.toLocaleTimeString([], { timeStyle: 'short' });

  return (
    <p>{timeStamp}</p>

  )
}

export default TimeStamp;