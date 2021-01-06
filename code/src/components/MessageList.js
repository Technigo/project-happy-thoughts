import React, { useState } from "react";
import moment from "moment";

export const MessageList = ({ messageList, onLikeChange, name }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = (id) => {
    setLikes(likes + 1);
    onLikeChange(id);
  };

  return (
    <div>
      {messageList.map((messages) => (
        <article className="message-card" key={messages._id}>
          <h3 className="message">{messages.message} </h3>
          <div className="message-bottom">
            <div className="like-wrapper">
              <button
                className="heart-button"
                type="button"
                onClick={() => handleLike(messages._id)}
              >
                <span className="heart" role="img" aria-label="Heart">
                  {"❤️ "}
                </span>
              </button>
              <p className="likes">x {messages.hearts}</p>
            </div>
            <div className="message-bottom-wrapper">
              <span className="messageTime">
                {moment(messages.createdAt).fromNow()}
              </span>
              <p className="message-name">{messages.name}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};