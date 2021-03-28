import React from "react"

import ThoughtsCard from "./ThoughtsCard"

const ThoughtsList = ({ messageList, handleLikesIncrease }) => {
  return (
    <>
    {messageList.map(message => (
      <ThoughtsCard 
        key={message._id}
        message={message}
        onLikesIncrease={handleLikesIncrease}
      />
    ))}
    </>
  )
}

export default ThoughtsList