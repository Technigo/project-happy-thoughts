import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './MessageList.css'

export const MessageList = () => {
  const MESSAGES_URL = "https://wk11livesession.herokuapp.com/messages"
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const filteredData = data.filter(message => {
          return message.text
        })
        filteredData.reverse()
        setMessages(filteredData)
      })
  }, [])

  return (
    <div>
      {
        messages.map(message => (
          <p className="message-box">
            {message.text}
            <button className="like-button">❤️</button>
            <span className="message-time">
              {moment(message.created).fromNow()}
            </span>
          </p>
        ))
      }
    </div>
  )
}