import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './messageList.css'
import { LikeHearts } from './LikeHearts'

export const MessageList = () => {
  const MESSAGES_URL = 'https://happy-thoughts-week19.herokuapp.com/thoughts'
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setMessages(data)
      })
  }, [])

  return (
    <div className="messages-list">
      {messages.map(message => (
        <section key={message._id} className="messages">
          <h4> {message.message}</h4>
          <div className="likes-and-when">
            <LikeHearts message={message} />
            <h5>{moment(message.createdAt).fromNow()}</h5>
          </div>
        </section>
      ))}
    </div>
  )
}
