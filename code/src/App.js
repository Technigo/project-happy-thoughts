import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL } from './reusable/urls'
import MessageForm from 'components/MessageForm'
import MessageList from 'components/MessageList'
import LikeButton from 'components/LikeButton'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  
  useEffect(() => {
    fetchMessageList()
  }, []) 

  const fetchMessageList = () => {
    fetch (API_URL)
      .then(res => res.json ())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify({ message: messageNew })
    }
    fetch (API_URL, options) 
      .then (res => res.json())
      .then (receivedMessage => setMessageList([...messageList, receivedMessage]))
      .catch(err => console.error(err))
  }

  const onMessageLiked = (likedMessageID) => {
    const updateMessages = messageList.map((message) => {
      if (message._id === likedMessageID) {
        message.hearts += 1
      }
      return message
    })
    setMessageList(updateMessages)
  }

  return (
    <section className="tought-container">
        <div className="tought-card">
        <MessageForm onSubmit={onFormSubmit} messageNew={messageNew} setMessageNew={setMessageNew} />
        {messageList.map(tought => (
          <div className="tought-message" key={tought._id}>
            <MessageList 
              message = {tought.message} 
              time = {moment(tought.createdAt).fromNow()}
            />
             <LikeButton 
              id={tought._id}
              message = {tought}
              heart = {tought.hearts}
              onMessageLiked = {onMessageLiked}
            />
          </div>
        ))}
        </div>
    </section>
  )
}
