/* eslint-disable no-underscore-dangle */
import React from 'react';

const SingleMessage = ({ key, singleMessage }) => {
  console.log('key', key);
  console.log('singleMessage._id', singleMessage._id);
  console.log('singleMessage', singleMessage);
  return (
    <div className="message">
      <p key={singleMessage._id}>{singleMessage.message}</p>
      <div className="info-wrapper">
        <div className="info-like">
          <button type="button" id="likeBtn"><span className="emoji" aria-label="like button">❤️</span></button>
          <span className="num-likes">x{singleMessage.hearts}</span>
        </div>
        <div className="info-time">Time since last post</div>
      </div>
    </div>
  );
};

export default SingleMessage;