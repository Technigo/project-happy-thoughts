import React from "react";

import { LikeButton } from "./LikeButton";
import { DisplayTime } from "./DisplayTime";

export const MessageList = (props) => {
  const {
    messageList,
    setMessageList,
    fetchLikes,
    newMessage,
    loading,
  } = props;

  console.log(newMessage);
  return (
    <>
      {/*sets a different class if there is a new post (to be able to add animation)*/}
      <div
        className={`${
          newMessage ? "message-list__new-message" : "message-list"
        }`}
      >
        {/*shows a loading symbol when posts are loading*/}
        {loading && <div className="loading-symbol"></div>}

        {messageList.map((post) => (
          <div key={post._id} className="message">
            <p className="message__post"> {post.message} </p>
            <div className="message-info">
              <LikeButton
                likes={post.hearts}
                id={post._id}
                messageList={messageList}
                setMessageList={setMessageList}
                fetchLikes={fetchLikes}
              />
              <DisplayTime messageTime={post.createdAt} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
