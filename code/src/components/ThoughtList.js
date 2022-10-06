/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtList = ({ loading, thoughtList, onThoughtLikeChange }) => {
  if (loading) {
    return <h1 className="loading">😬 loading 😬</h1>
  }

  return (
    <section className="thought-list-container">
      {thoughtList.map((thought) => (
        <div key={thought._id} className="thought-list">
          <h4 className="the-thought">{thought.message}</h4>
          <div className="thought-detail">
            <button
              type="button"
              className={thought.hearts === 0 ? 'empty-button' : 'like-button'}
              onClick={() => onThoughtLikeChange(thought._id)}><span>💖</span>
            </button>
            <p className="likes">x{thought.hearts}</p>
            <p className="time-detail">
              {formatDistanceToNow(
                new Date(thought.createdAt),
                Date.now(),
                { addSuffix: true }
              )}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
export default ThoughtList;