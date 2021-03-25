import React from "react"
import moment from "moment"

const MessageElement = ({ message, onLikesIncrease }) => {
  return (
    <div>
    <h4>{message.message}</h4>
    <button onClick={() => onLikesIncrease(message._id)}>♥</button>
    <p>x {message.hearts}</p>
    <p>{moment(message.createdAt).fromNow()}</p>
  </div>
  )
}

export default MessageElement