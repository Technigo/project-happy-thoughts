/* eslint-disable no-underscore-dangle */
import React from 'react';

export const List = (props) => {
  console.log(props.thoughts);
  return (
    <div className="list">
      <ul>
        {props.thoughts.map((thought) => (
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
