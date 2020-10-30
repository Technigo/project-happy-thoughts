import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { Message } from './Message.js'
import { MessageUrl } from './Urls.js'

export const MessageList = () => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(MessageUrl)
      .then(result => {
        return result.json()
      })
      .then(data => {
        setMessages(data) //storing the messages from the api in the state variable messages 
      })
  }, []) // useEffect only listens to when the component is mounted
  // without [] useEffect would listen to both when the component is mounted and state changes
  // with [messages] useEffect listens to when the component is mounted as well as the state changes of messages variable

  return (
    <>
      {messages.map(message => {
        return <Message
          key={message._id}
          id={message._id} //cannot use key as a prop in a child component, we need to have a separate id
          message={message.message}
          created={moment(message.createdAt).fromNow()}
          likes={message.hearts}
        />
      })}
    </>
  )
}