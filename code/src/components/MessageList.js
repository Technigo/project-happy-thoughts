import React, { useEffect, useState } from 'react'
import moment from 'moment'

export const MessageList = () => {
  const MESSAGES_URL = 'https://wk11livesession.herokuapp.com/messages'
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        data.reverse();

        const filtredMessages = data.filter((message) => message.text)

        setMessages(filtredMessages)
      })
  }, [])

  return (
    <div>
      {messages.map((message) => {
        return (
          <p className="message" key={message._id}>
            {message.text} 
            <br></br>
            <span className="message-time">
            </span>
            {moment(message.created).fromNow()}
          </p>
        )
      })}
    </div>
  )
}
