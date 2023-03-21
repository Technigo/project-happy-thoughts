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
