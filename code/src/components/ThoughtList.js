/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React from 'react';
import { formatDistance } from 'date-fns'; // did npm install date-fns

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
              /* an if conditional that says if the count of the heart is zero,
              then the className would be empty-button,
              otherwise it would be like-button */
              className={thought.hearts === 0 ? 'empty-button' : 'like-button'}
              onClick={() => onThoughtLikeChange(thought._id)}>❤️
            </button>
            <p className="likes">x{thought.hearts}</p>
            <p className="time-detail">
              {formatDistance(new Date(thought.createdAt), Date.now(), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
export default ThoughtList;