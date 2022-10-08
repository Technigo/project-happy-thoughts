/* eslint-disable no-underscore-dangle */
import React from 'react'
import { formatDistance } from 'date-fns';

const HappyThoughtList = ({ loading, thoughts, onLikeIncrese }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section>
      {thoughts.map((list) => (
        <div className="container" key={list._id}>
          <p className="thoughtMsg">{list.message}</p>
          <div className="likes">
            <button
              type="button"
              className={(list.hearts === 0 ? 'like-btn' : 'no-like-btn')}
              onClick={() => onLikeIncrese(list._id)}>❤️
            </button>
            <p className="counter">x {list.hearts}</p>
            <p className="date">{formatDistance(new Date(list.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default HappyThoughtList;