import React from "react";
import moment from 'moment';

const MessageListItem = ({ message }) => {
  return (
    <>
      {message.text}
      <p>{moment(message.created).fromNow()}</p>
    </>
  )
}

export default MessageListItem;