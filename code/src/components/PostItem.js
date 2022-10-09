/* eslint-disable */
import React from 'react';
import LikeButton from 'components/LikeButton';
import { formatRelative } from 'date-fns';

const postItem = ({ thought }) => {
  return (
    <div key={thought._id}>
      <p>{thought.message}</p>
      <div className="likes-n-date-wrapper">
        <LikeButton />
        <p>Posted: {formatRelative(new Date(thought.createdAt), new Date())}</p>
      </div>
    </div>
  )
};

export default postItem;