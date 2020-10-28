import React, { useState } from "react";
import moment from "moment";

export const MessageCard = (props) => {

const [liked, setLiked] = useState(false)
const [hearts, setHearts] = useState(props.message.hearts)

const messageLike = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${props.message._id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
        setLiked(true)
        setHearts(hearts + 1)
        console.log(hearts)
    })
}

  return (
    <div className="message-container">
      <div className="message-content">
        <p className="message-text">{props.message.message}</p>
        <div className="message-details">
          <span className="hearts" onClick={messageLike}>❤️</span>
          <span className="hearts-count">x {hearts}</span>
          <span className="message-time">
            {moment(props.message.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};
