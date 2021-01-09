import React from "react";
import moment from "moment";

export const MessageList = (props) => {
  const { messageList, onLiked } = props;

  const onHandleClick = (_id) => {
    fetch(
      `https://project-happy-thoughts-api-jh.herokuapp.com/thoughts/${_id}/like`,
      {
        method: "POST",
        body: "",
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => onLiked(_id));
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
            </button>
            <span aria-label="likes" className="likes">
              x{message.hearts}
            </span>

            <span className="moment">
              <p>{moment(message.createdAt).fromNow()}</p>
            </span>
          </div>
        );
      })}
    </div>
  );
};
