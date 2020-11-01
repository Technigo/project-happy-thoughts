import React, { useEffect, useState } from 'react'

import moment from 'moment'

export const MessageList = () => {
  const MESSAGES_URL = 'https://wk11livesession.herokuapp.com/messages'
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages()
  }, [])

    const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.reverse();

        const filtredMessages = data.filter((message) => message.text)

        setMessages(filtredMessages)
      })
}

  const likeHearts = (messageId) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like`, {
            method: "POST", 
            headers: { "Content-Type": "application/json" }
        }).then (() => {
            fetchMessages()
        })
  }


  return (
    <>
      {messages.map((message) => {
        return (
          <div className="message-section">
            <p className="message" key={message._id}>
              {message.text}
            <br></br>
            <button id="hearts-button"
              onClick={likeHearts}
              className="hearts-button">
              <span role="img" aria-label="Heartimage">❤️</span>
              </button> 
              x {message.hearts}
                <span className="message-time">
                  {moment(message.created).fromNow()}
                </span>
              </p>
              </div>
              )
      })}
          </>
        )
      }
