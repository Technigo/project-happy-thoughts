import React from 'react'
import moment from 'moment';

export const ThoughtCard = ({message, createdTime}) => {
  return (
    <div className="thought-card">
      <p>{message}</p>
      <p>{moment(createdTime).fromNow()}</p>
    </div>
  );
};