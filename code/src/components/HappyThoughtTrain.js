/* eslint-disable no-underscore-dangle */

import React from 'react';
import { formatDistanceStrict } from 'date-fns';

const HappyThoughtTrain = ({ happyThoughtTrain, onGiveHeartChange }) => {
  return (
    <section className="list-wrapper">
      {happyThoughtTrain.map((thought) => {
        return (
          <div className="list-box" key={thought._id}>
            <h1 className="list-message"> {thought.message}</h1>
            <div className="list-details">
              <button
                className="give-heart-btn"
                type="button"
                onClick={() => onGiveHeartChange(thought._id)}>❤️
              </button>
              <p className="give-heart"> x {thought.hearts}</p>
              <p className="time-stamp">
                {formatDistanceStrict(new Date(thought.createdAt), Date.now(), {
                  addSuffix: true
                })}
              </p>
            </div>
          </div>
        )
      })}
    </section>
  );
}
export default HappyThoughtTrain;

