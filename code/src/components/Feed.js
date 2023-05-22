/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const Feed = ({ time, id, hearts, post, handleLikes }) => {
  return (
    <div className="post-card">
      <div className="post-message-wrapper">
        <p>{post}</p>
      </div>
      <div className="post-bottom">
        <div className="likes-wrapper">
          <button
            type="submit"
            className={hearts === 0 ? 'heart-button' : 'liked-heart-btn'}
            onClick={() => handleLikes(id)}>❤️
          </button>
          <p className="number-likes">x {hearts}</p>
        </div>
        <p className="time-stamp">
          {formatDistance(new Date(time), Date.now(), { addSuffix: true })}
        </p>
      </div>
    </div>
  )
}

export default Feed;