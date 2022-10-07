/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

export const ThoughtsFlow = ({ loading, thoughts, onLikesIncrease }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (

    <section>
      {thoughts.map((list) => (
        <div className="Thoughts" key={list._id}>
          <p className="thought-text">{list.message}</p>
          <div className="likes">
            <button className={(list.hearts === 0 ? 'like-btn' : 'no-like-btn')} onClick={() => onLikesIncrease(list._id)}>❤️</button>
            <p className="counter">x {list.hearts}</p>
            <p className="date">
              {formatDistance(new Date(list.createdAt), Date.now(), { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
