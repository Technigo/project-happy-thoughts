/* eslint-disable no-underscore-dangle */
import React from 'react';
/* import { formatDistance } from 'date-fns';
import parseIso from 'date-fns/parseISO' */

const GetThoughts = ({ getThoughts, handleLikeButtonOnClick }) => {
  /*   const displayTimePostFromNow = formatDistance(
      parseIso(getThoughts.createdAt),
      new Date(),
      { includeSeconds: true }
    ) */
  return (
    <section className="thoughts wrapper">
      {getThoughts.map((thought) => (
        <div className="thoughts card" key={thought._id}>
          <div className="thoughts-text">
            <p>{thought.message}</p>
          </div>
          <div className="thoughts-likes">
            <button className="btn-like" type="button" onClick={() => handleLikeButtonOnClick(thought._id)}>💗</button>
            <p>x {thought.hearts}</p>
            <p className="thoughts-time">{thought.createdAt}</p>
            {/* <p>{displayTimePostFromNow}</p> */}
          </div>
        </div>
      ))}

    </section>

  );
};

export default GetThoughts