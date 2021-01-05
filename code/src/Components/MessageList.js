import React, { useEffect, useState } from 'react'

import moment from 'moment'

import { LikedMessage } from './LikedMessage'
import './MessageList.css'

export const MessageList = () => {
  const MessagesUrl = 'https://the-happy-thoughts.herokuapp.com/thoughts'
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(MessagesUrl)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // filter out empty messages 
        const filteredMessages = data.filter((message) => message.message)
        // save data to state
        setMessages(filteredMessages)
      })
  }, [])
  return (
    <section className='message-wrapper'>
      {messages.map((message) => {
        return (
          <article className='message' key={message._id}>
            <h2 tabIndex='0'>{message.message}</h2>
              <div className='heart-time'>
              <LikedMessage 
              hearts={message.hearts} 
              id={message._id} />
              <span className='span-time'>
              <p tabIndex='0' className='time'>{moment(message.createdAt).fromNow()}</p>
              </span>
              </div>
          </article>

        )
      })}
    </section>
  )
}