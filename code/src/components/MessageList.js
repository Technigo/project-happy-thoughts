import React, { useState, useEffect, useCallback } from "react";

import { API_URL } from "../reusable/urls";
import { LikeButton } from "./LikeButton";
import { DisplayTime } from "./DisplayTime";

export const MessageList = ({ messageList, setMessageList, newMessage }) => {
  const [loading, setLoading] = useState(true);

  const fetchMessageList = useCallback(() => {
    //had problem with dependecies, so used callback to not get re-renders in useEffect dependecies
    fetch(API_URL)
      .then((res) => res.json(), setLoading(true))
      .then((messages) => {
        setLoading(false);
        setMessageList(messages);
      })
      .catch((error) => console.log(error));
  }, [setMessageList, setLoading]);

  useEffect(() => {
    fetchMessageList();
  }, [fetchMessageList]);

  return (
    <>
      {/*shows a loading symbol when posts are loading*/}
      {loading && <div className="loading-symbol"></div>}
      {messageList.map((post) => (
        <div
          key={post._id}
          className={`${
            post === newMessage ? "message message-new" : "message" //makes the just submitted post have a special class (for animation)
          }`}
        >
          <p className="message__post"> {post.message} </p>
          <div className="message-info">
            <LikeButton
              likes={post.hearts}
              id={post._id}
              messageList={messageList}
              setMessageList={setMessageList}
            />
            <DisplayTime messageTime={post.createdAt} />
          </div>
        </div>
      ))}
    </>
  );
};
