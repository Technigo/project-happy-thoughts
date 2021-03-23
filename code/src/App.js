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
      .then (receivedMessage => setMessageList([receivedMessage, ...messageList]))
      .catch((err) => {

      })
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
    <section className="tought-card">
          <MessageForm 
          onSubmit={onFormSubmit} 
          messageNew={messageNew} 
          setMessageNew={setMessageNew} 
          />
          {messageList.map(tought => (
            <div className="tought-message" key={tought._id}>
              <MessageList 
                message = {tought.message} 
              />
              <LikeButton 
                id={tought._id}
                message = {tought}
                heart = {tought.hearts}
                onMessageLiked = {onMessageLiked}
                time = {moment(tought.createdAt).fromNow()}
              />
          </div>
        ))}
    </section>
  )
}
