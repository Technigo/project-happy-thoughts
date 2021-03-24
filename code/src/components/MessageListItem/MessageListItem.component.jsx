import React, { useState } from "react";
import moment from "moment";

import { LIKES_URL } from '../../api/urls'

const MessageListItem = ({ message }) => {
  const [likes, setLikes] = useState(message.likes);
  
  const handleLikesIncrease = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then((data) => setLikes(data.likes))
      .catch((err) => console.error(err));
  };

  return (
    <>
      {message.text}
      <p>{moment(message.created).fromNow()}</p>
      <button onClick={() => handleLikesIncrease(message._id)}>{likes}</button>
    </>
  )
}

export default MessageListItem;