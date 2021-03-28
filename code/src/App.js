import React, {useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL, LIKES_URL } from './reusable/urls'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [])
  
  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  const onMessageNewChange= (event) => {
    setMessageNew(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageNew })
    }

    fetch(API_URL, options)   
      .then(res => res.json())
      .then(receivedMessage => setMessageList([receivedMessage, ...messageList]))
    
      setMessageNew('')
    }

  const onLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(LIKES_URL(id), options)
      .then(res => res.json())
      .then(receivedLike => {
        const updatedMessageList = messageList.map(message => {
          if (message._id === receivedLike._id) {
            message.hearts += 1
          } 
          return message;
        })
        setMessageList(updatedMessageList)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='messageForm'>Write a message</label>
        <input 
          id='messageForm'
          type='text'
          value={messageNew}
          onChange={onMessageNewChange}
          minLength='5'
          maxLength='140'
        />
        <button type='submit'>Send Happy Thought<span role='img' aria-label='heart-emoji'>❤️</span></button>
      </form>
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.message}</h4>
          <button 
            onClick={() => onLikesIncrease(message._id)} 
            className='likes-button'>
            <span role='img' aria-label='heart-emoji'>❤️</span>
          </button>
          <span className='amount-likes'>x {message.hearts}</span>
          <p className='date'>{moment(message.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
