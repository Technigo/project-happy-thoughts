/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint no-underscore-dangle: 0 */
/* eslint-disable no-tabs */
import moment from 'moment'

import React from 'react';

const ThoughtsList = ({ thoughtsList, handleLikeOnClick }) => {
  return (
    <section>
      {thoughtsList.map((thought) => (
        <div className="thought-box" key={thought._id}>
          <div className="thought-text">
            <p>{thought.message}</p>
          </div>
          <div className="like-box">
            <button className={(thought.hearts === 0 ? 'heart-button' : 'red-heartButton')} type="button" onClick={() => handleLikeOnClick(thought._id)}>❤️</button>
            <p> X {thought.hearts}</p>
            <p className="moment">
              {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </div>
      ))}

    </section>

  );
};

export default ThoughtsList;