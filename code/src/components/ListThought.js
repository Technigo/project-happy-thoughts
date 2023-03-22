/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment'

const ListThought = ({ post, handleLikes }) => {
  return (
    <div className="post-card">
      <div className="post-message-wrapper">
        <p>{post.message}</p>
      </div>
      <div className="post-bottom">
        <div className="likes-wrapper">
          <button
            type="button"
            className={post.hearts === 0 ? 'heart-button' : 'liked-heart-btn'}
            onClick={() => handleLikes(post._id)}>❤️
          </button>
          <p className="number-likes">x {post.hearts}</p>
        </div>
        <p className="time-stamp">{moment(post.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default ListThought
