/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

const PostList = ({ postList, onLikesIncrease }) => {
  return (
    <section>
      {postList.map((thoughtMessage) => {
        return (
          <div key={thoughtMessage._id}>
            <p>{thoughtMessage.message}</p>
            <div>
              <div>
                <button
                  type="button"
                  onClick={() => onLikesIncrease(thoughtMessage._id)}
                  style={{ background: thoughtMessage.hearts >= 1 ? '#f9d4d4' : '#e9e7e7' }}>
                  <span>
                    ❤️️
                  </span>
                </button>
                <p>x {thoughtMessage.hearts}</p>
              </div>
              <p>Posted: {moment(thoughtMessage.createdAt).fromNow()}</p>
            </div>
          </div>
        )
      })}
    </section>
  );
};

export default PostList;