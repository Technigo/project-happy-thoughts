import React from 'react';
import moment from 'moment';

export const ThoughtsCard = ({message, timeCreated}) => {
    return (
        <div className="thought-card">
          <p>{message}</p>
          <p>{moment(timeCreated).fromNow()}</p>
        </div>
    )
};