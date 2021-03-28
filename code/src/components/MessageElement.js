import React from "react";
import moment from "moment"

const MessageElement = ({message, onLikeIncreas}) => {
  return (
    <div key={message._id}>
      <h4>{message.message}</h4>
      <button onClick={() => onLikeIncreas(message._id)}>
        {message.hearts}
        ❤️
      </button>
      <p>{moment(message.createdAt).fromNow()}</p>
    </div>
  );
};

export default MessageElement;
