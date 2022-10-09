/* eslint-disable no-underscore-dangle */
import React from 'react';
import SinglePost from './SinglePost';

const PostList = ({ thoughtList }) => {
  return (
    <section>
      {thoughtList.map((singlePost) => {
        return (
          <div key={singlePost._id}>
            <SinglePost message={singlePost.message} checked={singlePost.isChecked} />
          </div>
        )
      })}
    </section>
  );
}

export default PostList;