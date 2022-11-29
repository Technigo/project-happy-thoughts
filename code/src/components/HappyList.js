/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistanceStrict } from 'date-fns';

const HappyList = ({ happyList, onGiveHeartChange }) => { // addera loading och
  return (
    <section className="list-wrapper">
      {happyList.map((thought) => {
        return (
          <div className="list-box" key={thought._id}>
            <h3 className="list-message"> {thought.message}</h3>
            <div className="list-details">
              <button
                type="button"
                onClick={() => onGiveHeartChange(thought._id)}>❤️
              </button>
              <p className="give-heart">x {thought.hearts}</p>
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

export default HappyList;