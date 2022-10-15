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
              <div className="like-button">
                <button
                  type="button"
                  onClick={() => onLikesIncrease(thoughtMessage._id)}
                  style={{ background: thoughtMessage.hearts >= 1 ? '#FFADAD' : '#F2F0F0' }}>
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