import React from "react";
import moment from "moment";


const MessageListItem = ({ message, handleLikesIncrease }) => {
  return (
    <>
      {message.text}
      <p>{moment(message.created).fromNow()}</p>
      <button onClick={() => handleLikesIncrease(message._id)}>{message.likes}</button>
    </>
  )
}

export default MessageListItem;