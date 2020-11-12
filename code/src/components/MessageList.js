import React from "react";
import moment from "moment";

export const MessageList = ({ messageList, postHearts }) => {
  return (
    <div>
      {messageList.map((message) => (
        <article key={message._id}>
          <p className="message">
            {message.message}

            <div className="heart-button-wrapper">
            <div className="heart-button">
              <button
                onClick={() => postHearts(message._id)}
                type="button"
                className={message.hearts > 0 ? "liked" : "notLiked"}
              >
                <span className="liked-heart" role="img" aria-label="Heart">
                  {" ❤️  "}
                </span>
                
              </button>
              <p className="hearts-counted">x {message.hearts}</p>
            
             </div>

              <span className="message-time">
              {moment(message.createdAt).fromNow()}
            </span>
            </div>
          </p>
        </article>
      ))}
    </div>
  );
};
