import React, { useState, useEffect } from 'react'
import { LikeButton } from "./LikeButton"
import moment from "moment"
import './message-list.css'

export const MessageList = () => {
  const messages_url = "https://technigo-thoughts.herokuapp.com/"
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(messages_url)
      .then(res => res.json())
      .then(data => {
        setMessages(data)
      })
  }, [])

  return (
    <section className="message-list">
      {
        messages.map(message => (
          <article className="message">
            <p key={message._id}>{message.message}
            </p>
            <div className="likes-and-time-container">
              < LikeButton />
              <div className="likes"> x {message.hearts}</div>
              <div className="time-stamp">{moment(message.createdAt).fromNow()}</div>
            </div>
          </article>
        ))
      }
    </section>
  )
}