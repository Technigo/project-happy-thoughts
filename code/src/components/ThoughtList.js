import React from 'react'

import Thought from './Thought'
import '../index.css'

const ThoughtList = ({ messageList, handleLikesIncrease }) => {
  return (
    <>
      {messageList.map((message) => (
        <Thought
          key={message._id}
          message={message}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </>
  )
}

export default ThoughtList
