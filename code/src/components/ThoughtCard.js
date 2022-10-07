/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtCard = ({ loading, thoughts, onThoughtLikeChange }) => {
  if (loading) {
    return <h1>Loading, loading</h1>
  }
  return (
    <section>
      {thoughts.map((thought) => (
        <div key={thought._id} className="box boxCard">
          <h4 className="postedThought">{thought.message}</h4>
          <button
            type="button"
            className={thought.hearts === 0 ? 'noLikesButton' : 'likeButton'}
            onClick={() => onThoughtLikeChange(thought._id)}>❤️
          </button>
          <p className="likes">x{thought.hearts}</p>
          <p className="postedTime">{formatDistanceToNow(new Date(thought.createdAt), Date.now(), {
            addSuffix: true
          })}
          </p>
        </div>
      ))}
    </section>
  );
}

export default ThoughtCard;