import React from "react";

import MessageCard from "./MessageCard"

const Likes = ( {messages, setMessages}) => {

const onLiked = thoughtId => {
  const updatedThoughts = message.map((thought) => 
  if (thought._id === thoughtId) {
    thought.hearts += 1
  }
  return thought
  )
}

setMessages(updatedThoughts)
};

export default Likes
