import React from "react";
import moment from "moment";

export const MessageList = ({ messageList,  postHearts }) => {


  return (
    <section>

        <div className="message-list">
          {messageList.map((message) => (
      
            <article className="messages-stored">
              <p className="message" key={message._id}>
                {message.message}

                <span className="message-time">
                  {moment(message.createdAt).fromNow()}
                </span>
              </p>
              <button 
                onClick={() =>  postHearts(message._id) }
                type="button"
                className={message.hearts > 0 ? "liked" : "notLiked"}
              >
                <span role="img" aria-label="Heart">
                  {"❤️"}
                </span>
              </button>
              <p className="hearts-text">x {message.hearts}</p>
              </article>
       
          ))}
        </div>
     
    </section>
  );
};
