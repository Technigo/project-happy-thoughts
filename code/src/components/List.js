/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import './List.css';

export const List = ({ thoughts, setThoughts }) => {
  return (
    <div className="list">
      <ul>
        {thoughts.map((thought) => (
          <div key={thought._id} className="box messages">
            <p className="message-text">{thought.message}</p>
            <div className="stats-container">
              <div className="like-container">
                <div className="heart">
                  <p>❤️</p>
                </div>
                <p>x{thought.hearts}</p>
              </div>
              <div className="time">
                <p>{thought.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
