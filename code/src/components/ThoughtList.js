import React from 'react'

import Thought from './Thought'
import '../index.css'

const ThoughtList = ({ messageList }) => {
  return (
    <>
      {messageList.map(message => (
        <Thought key={message._id} message={message} />
      ))}
    </>
  )
}

export default ThoughtList
