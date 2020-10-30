import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { Message } from './Message.js'

const messageUrl = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const MessageList = () => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(messageUrl)
      .then(result => {
        return result.json()
      })
      .then(data => {
        setMessages(data)
      })
  }, [])


  return (
    <>
      <br></br>
      {messages.map(message => {
        return <Message
          key={message._id}
          id={message._id}
          message={message.message}
          created={moment(message.createdAt).fromNow()}
          likes={message.hearts}
        />
      })}
    </>
  )
}