/* eslint-disable max-len */
import React from 'react';
import SingleMessage from './SingleMessage';

// This code does several things
// 1: It creates the message wrapper called list-wrapper
// 2. It takes the messageList that was fetched in App.js and maps over that API
// 3. It takes the map and sends it into the SingleMessage component, where we decide what to show,
// It creates a "copy" of component SingleMessage for each time it is mapped over one item ('singleMessage')
const MessageList = ({ messageList, fetchPosts }) => {
  // console.log(messageList)
  return (
    <div className="list-wrapper">
      {messageList.map((singleMessage) => (
        // eslint-disable-next-line no-underscore-dangle
        <SingleMessage key={singleMessage._id} singleMessage={singleMessage} fetchPosts={fetchPosts} />
      ))}
    </div>
  );
};

export default MessageList;

/*

<SingleMessage key={singleMessage._id} singleMessage={singleMessage} />

import SingleThought from "./SingleThought";

const ThoughtList = ({ thoughtsList }) => {
  return thoughtsList.map((banana) => {
    // eslint-disable-next-line no-underscore-dangle
    return <SingleThought key={banana._id} thought={banana} />;
  });
};

export default ThoughtList;

*/

/*
const MessageList = ({ messageList }) => {
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
*/