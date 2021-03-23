import React, { useState, useEffect } from "react";

import { API_URL } from "../reusable/urls";
import { LikeButton } from "./LikeButton";

export const MessageList = ({ message }) => {
  const [messageList, setMessageList] = useState([]);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMessageList();
  }, []);

  const getTime = (time) => {
    const now = new Date(Date.now());
    const gtmTime = new Date(time);
    const timeDiff = now - gtmTime;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);

    if (minutes >= 1 && minutes <= 60) {
      return minutes !== 1
        ? `${minutes.toFixed(0)} minutes ago`
        : `${minutes.toFixed(0)} minute ago`;
    } else if (seconds < 60) {
      return seconds !== 1
        ? `${seconds.toFixed(0)} seconds ago`
        : `${seconds.toFixed(0)} second ago`;
    }
    return `>1 hour ago`;
  };

  const displayMessages = (type) => {
    return (
      <ul className="messages">
        {type.map((post) => (
          <div className="messages-container">
            <li key={post._id}>
              <span className="messages__post">{post.message}</span>
              <div className="messages-info">
                <LikeButton likes={post.hearts} />
                <span className="messages-info__time">
                  {getTime(post.createdAt)}
                </span>
              </div>
            </li>
          </div>
        ))}
      </ul>
    );
  };

  return (
    <div className="message-list">
      {displayMessages(message)}
      {displayMessages(messageList)}
    </div>
  );
};
