import React, { useEffect } from 'react'


import { Message } from './Message.js'

export const MessageList = ({ messages, getMessages }) => {

  useEffect(getMessages, [])
  // with [] useEffect only listens to when the component is mounted 
  // without [] useEffect would listen to both when the component is mounted and state changes
  // with [messages] for example useEffect listens to when the component is mounted as well as the state updates of messages variable

  return (
    <>
      {messages.map(message => {
        return <Message
          key={message._id} //cannot use key as a prop in a child component, we need to have a separate id
          {...message}
          getMessages={getMessages}
        />
      })}
    </>
  )
}