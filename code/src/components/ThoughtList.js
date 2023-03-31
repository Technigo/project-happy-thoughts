/* eslint-disable no-underscore-dangle */

import React from 'react';
import moment from 'moment';

export const ThoughtList = ({ loading, thoughts, onLikesIncrease }) => {
  if (loading) {
    return <div className="loader"> </div>
  }

  const handleOnLikesIncrease = (id) => {
    onLikesIncrease(id);
  }

  return (

    <section>
      {thoughts.map((list) => (
        <div className="Thoughts" key={list._id}>
          <p className="thought-text">{list.message}</p>
          <div className="likes">
            <button type="button" className={(list.hearts === 0 ? 'like-btn' : 'no-like-btn')} onClick={() => handleOnLikesIncrease(list._id)}>❤️</button>
            <p className="counter">x {list.hearts}</p>
            <p className="date"> Posted: {moment(list.createdAt).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
