import React from 'react';
import moment from 'moment';

export const HappyThoughts = ({ happyThought }) => {
  return (
    <>
      <article className="happy-thought-wrapper">
        <h3>{happyThought.message}</h3>
        <button type="button" className="button-heart">
          <span className="heart">&hearts;</span>
        </button>
        <p>x {happyThought.hearts}</p>
        <p>{moment(happyThought.createdAt).fromNow()}</p>
      </article>
    </>
  );
};
