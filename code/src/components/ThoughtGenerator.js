/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { formatDistance } from 'date-fns';

const ThoughtGenerator = ({ onLikesIncrease, thoughts }) => {
  return (
    <section>
      {thoughts.map((thought) => (
        <div
          className="Thoughts"
          key={thoughts._id}>
          <h4>{thought.message}</h4>
          <p>{thought.hearts}</p>
          <p>{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
          <button
            type="button"
            className="like-button"
            onClick={() => onLikesIncrease(thought._id)}
            style={{ background: thought.hearts >= 1 ? '#de84b4' : '#eaeaea' }}>
            <span className="like-heart" role="img" aria-label="heart">
             🖤
            </span>
          </button>
        </div>
      ))}
    </section>
  )
}

export default ThoughtGenerator