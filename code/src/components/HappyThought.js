import React from 'react';
import moment from 'moment';

export const HappyThought = ({ happyThought }) => {
  return (
    <>
      <article className="happy-thought-wrapper">
        <h3 className="happy-thought-title">{happyThought.message}</h3>
        <p>
          <button type="button" className="button-heart">
            <span className="heart">&hearts;</span>
          </button>
          x {happyThought.hearts}
        </p>
        <p>{moment(happyThought.createdAt).fromNow()}</p>
      </article>
    </>
  );
};
