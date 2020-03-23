import React, { useState, useEffect } from 'react'
import moment from 'moment'

export const MessageList = () => {
  const [messages, setMessages] = useState([])
  const MESSAGES_URL = "https://wk11livesession.herokuapp.com/messages"

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
    <div>
      {
        messages.map(messages => (
          <p>{messages.text}
            <span>
              {moment(messages.created).fromNow()}
            </span>
          </p>
        ))
      }
    </div>
  )
}