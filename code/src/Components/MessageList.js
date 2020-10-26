import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './MessageList.css'

export const MessageList = () => {
  const MessagesUrl = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
  const [messages, setMessages] = useState([])

  useEffect(() => {

    fetch(MessagesUrl)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        // filter out empty messages 
        const filteredMessages = data.filter((message) => message.message)
        // save data to state
        setMessages(filteredMessages)
      })
  }, [])
  return (
    <div>
      {messages.map((message) => {
        return (
          <section className="message" key={message._id}>
            <div>{message.message}</div>
            <div className="heart-time">
              <div className="heart">{message.hearts}</div>
              <div className="time">{moment(message.createdAt).fromNow()}</div>
            </div>
          </section>

        )
      })}
    </div>
  )
}