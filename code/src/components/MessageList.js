import React, { useEffect } from "react";

import { API_URL } from "../reusable/urls";
import { LikeButton } from "./LikeButton";

export const MessageList = ({ messageList, setMessageList }) => {
  const fetchMessageList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMessageList();
  }, []);

  /*calculates time since the message was posted and displays the time in
  a proper way depending on how long ago it was */
  const getTime = (time) => {
    const timeDiff = new Date(Date.now()) - new Date(time);

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const timeDisplay = (number, type) => {
      return number === 1
        ? `${number.toFixed(0)} ${type} ago`
        : `${number.toFixed(0)} ${type}s ago`;
    };

    if (days >= 1) {
      return timeDisplay(days, "day");
    } else if (hours >= 1 && hours < 24) {
      return timeDisplay(hours, "hour");
    } else if (minutes >= 1 && minutes < 60) {
      return timeDisplay(minutes, "minute");
    }

    return timeDisplay(seconds, "second");
  };

  return (
    <>
      {messageList.map((post) => (
        <div key={post._id} className="message">
          <p className="message__post">{post.message}</p>
          <div className="message-info">
            <LikeButton
              likes={post.hearts}
              id={post._id}
              messageList={messageList}
              setMessageList={setMessageList}
            />
            <p className="message-info__time">
              {getTime(post.createdAt)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
