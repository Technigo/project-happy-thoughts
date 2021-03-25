import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { THOUGHTS_URL, LIKES_URL  } from './reusable/urls'


export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')
  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(message => setMessageList(message))
      .catch(err => console.error(err))
  }

  const onNewmessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    setNewMessage('')

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage }) 
    }
    fetch(THOUGHTS_URL, options)
    .then(res => res.json())
    .then(postMessage => setMessageList([...messageList, postMessage]))
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
      .then(postMessage => {
        const updatedMessageList = messageList.map(message => {
          if (message._id === postMessage._id) {
            message.hearts += 1
          }
          return message; 
        })
        setMessageList(updatedMessageList)
      })
      .catch((err) => console.error(err))
  }
  
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='newMessage'>Write your happy thought here</label>
        <input 
        id='newMessage' 
        type='text' 
        value={newMessage}
        onChange={onNewmessageChange}
        />
        <button type='submit'>Send Happy Thought</button>
      </form>
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.message}</h4>
          <button onClick={() => onLikesIncrease(message._id)}>
            {message.hearts}
            ❤️
          </button>
          <p className="date">{moment(message.createdAt).fromNow()}</p>
        </div>
      )
        )}
    </div>
  )
}
