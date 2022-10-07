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
          <div className="Text">
            <h4>{thought.message}</h4>
          </div>
          <div className="LikesAndDate">
            <div className="Likes">
              <button
                type="button"
                className="heartButton"
                onClick={() => onLikesIncrease(thought._id)}>
                <span className="likeHeart" style={{ background: thought.hearts >= 1 ? 'rgb(243, 167, 167)' : 'lightgrey' }}>
             ❤️
                </span>
              </button>
              <p>+{thought.hearts}</p>
            </div>
            <p>{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ThoughtGenerator