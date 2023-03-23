import React from 'react';
import { SinglePost } from './SinglePost/SinglePost.js';
import './PostList.css';

export const PostList = ({ postList, loading }) => {
  return (
    <div className="postlist">
      {!loading && postList.map((thought) => {
        return (
          <SinglePost
            // eslint-disable-next-line no-underscore-dangle
            key={thought._id}
            thought={thought} />
        )
      })}
      {loading && (<h2>LOADING</h2>)}

    </div>
  )
}