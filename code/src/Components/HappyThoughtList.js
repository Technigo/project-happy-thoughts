/* eslint-disable no-underscore-dangle */
import React from 'react'
import { formatDistance } from 'date-fns';

const HappyThoughtList = ({ loading, thoughts, onLikeIncrese }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section>
      {thoughts.map((thought) => (
        <div className="container" key={thoughts._id}>
          <p className="thoughtMsg">{thought.message}</p>
          <div className="likes">
            <button
              type="button"
              className={(thought.hearts === 0 ? 'like-btn' : 'no-like-btn')}
              onClick={() => onLikeIncrese(thought._id)}>❤️
            </button>
            <p className="counter">x {thought.hearts}</p>
            <p className="date">{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default HappyThoughtList;