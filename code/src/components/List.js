/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from 'react';

export const List = ({ thoughts, setThoughts }) => {
  return (
    <div className="list">
      <ul>
        {thoughts.map((thought) => (
          <div key={thought._id}>
            <p>{thought.message}</p>
            <div>
              <img alt="empty" />
              <p>x{thought.hearts}</p>
            </div>
            <div>
              <p>{thought.createdAt}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
