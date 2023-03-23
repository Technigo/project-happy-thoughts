import React from 'react';

const MessageList = ({ loading, messageList, setMessageList }) => {
  console.log('loading', loading);
  console.log('messageList', messageList);
  console.log('setMessageList', setMessageList);
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }
  return (
    <div className="list-wrapper">
      <h2>MessageList here</h2>
      <div className="message">
        <p>Hello</p>
        <div className="info-wrapper">
          <div className="info-like">
            <button type="button" id="likeBtn"><span className="emoji" aria-label="like button">❤️</span></button>
            <span># likes</span>
          </div>
          <div className="info-time">Time since last post</div>
        </div>
      </div>
      <ul>
        {messageList.map((singleMessage) => (
          // eslint-disable-next-line no-underscore-dangle
          <li key={singleMessage._id}>{singleMessage.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
