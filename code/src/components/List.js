/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';
import './List.css';

export const List = ({ thoughts, setThoughts, handleLikeChange }) => {
  return (
    <div className="list">
      <ul>
        {thoughts.map((thought) => (
          <div key={thought._id} className="box messages">
            <p className="message-text">{thought.message}</p>
            <div className="stats-container">
              <div className="like-container">
                <div className="heart">
                  <p onClick={() => handleLikeChange(thought._id)}>❤️</p>
                </div>
                <p>x{thought.heart}</p>
              </div>
              <div className="time">
                <p>{moment(thought.createdAt).fromNow()}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
