import React, { useState, useEffect } from 'react'
import moment from "moment"

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
    <div>
      {
        messages.map(message => (
          <p key={message._id}>{message.message}
            <span>{moment(message.createdAt).fromNow()}</span>
          </p>
        ))
      }
    </div>
  )
}