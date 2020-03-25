import React, { useState, useEffect } from 'react'
import moment from 'moment'

export const MessageList = () => {
  const MESSAGE_URL = 'https://technigo-thoughts.herokuapp.com/'
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(MESSAGE_URL)
      .then((response) => {
        return response.json()
      })
      .then(data => {
        setMessages(data)
        console.log(data)
      })


  }, [])

  return (
    <div>
      {
        messages.map(message => (
          <p className='message-list' key={message._id}>
            {message.message}
            <a><button className='heart'>

            </button></a>
            <span className='heart-count'>
              {message.hearts}x
            </span>
            <span className='message-time'>
              {moment(message.createdAt).fromNow()}
            </span>
          </p >
        ))
      }
    </div >
  )
}