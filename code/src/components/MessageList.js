import React, { useState } from "react";
import moment from "moment";

const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

export const MessageList = (props) => {
  const { messageList, hearts } = props;
  const [likes, setLikes] = useState(0);

  const onHandleClick = (id, hearts) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" },
    }).then(setLikes(likes + 1));
    console.log(likes);
  };

  return (
    <div>
      {messageList.map((message) => {
        return (
          <div className="happy-message" key={message._id}>
            {message.message}
            <button
              className="heart"
              onClick={() => onHandleClick(message._id)}
            >
              <span role="img" aria-label="heart">
                {"❤️"}
              </span>
              x {message.hearts}
            </button>

            <span className="moment">
              <p>{moment(message.createdAt).fromNow()}</p>
            </span>
          </div>
        );
      })}
    </div>
  );
};
