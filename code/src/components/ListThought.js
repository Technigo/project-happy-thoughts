/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment'

const ListThought = ({ post, handleLikes }) => {
  return (
    <div>
      <div>
        <p>{post.message}</p>
      </div>
      <button
        type="button"
        onClick={() => handleLikes(post._id)}>Like
      </button>;
      <p>x {post.hearts}</p>
      <p>{moment(post.createdAt).fromNow()}</p>
    </div>
  )
}

export default ListThought
