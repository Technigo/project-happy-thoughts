/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

const PostList = ({ postList, onLikesIncrease }) => {
  return (
    <section className="postList-wrapper">
      {postList.map((thoughtMessage) => {
        return (
          <div className="post-wrapper" key={thoughtMessage._id}>
            <p>{thoughtMessage.message}</p>
            <div className="post-gutter">
              <div className="like-container">
                <button
                  type="button"
                  onClick={() => onLikesIncrease(thoughtMessage._id)}
                  className={thoughtMessage.hearts >= 1 ? 'like-button pink' : 'like-button'}>
                  <span>
                    ❤️️
                  </span>
                </button>
                <p className="footnote">x {thoughtMessage.hearts}</p>
              </div>
              <p className="footnote">Posted: {moment(thoughtMessage.createdAt).fromNow()}</p>
            </div>
          </div>
        )
      })}
    </section>
  );
};

export default PostList;