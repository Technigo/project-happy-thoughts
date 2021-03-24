import React, { useState } from "react";
import moment from "moment";

import { LIKES_URL } from '../../api/urls'

const MessageListItem = ({ message }) => {
  const [likes, setLikes] = useState(message.hearts);

  const handleLikesIncrease = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then((data) => setLikes(data.hearts))
      .catch((err) => console.error(err));
  };

  return (
    <>
      {message.message}
      <p>{moment(message.createdAt).fromNow()}</p>
      <button onClick={() => handleLikesIncrease(message._id)}>{likes}</button>
    </>
  )
}

export default MessageListItem;