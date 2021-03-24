import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL } from './reusable/urls'
import { HEART_URL } from './reusable/urls'

export const App = () => {
  const [happyList, setHappyList] = useState([])   //state properties
  const [newMessage, setNewMessage] = useState ('')
  
  useEffect(()=> {
    fetchHappyThoughtList()
  }, []) //only for when the component is mounted. add empty string.Sending request to fetch funct

  const fetchHappyThoughtList = () => {
    fetch (API_URL)
    .then (res => res.json())
    .then (messages => setHappyList(messages))
    .catch(err => console.error(err))
  }

  const onNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage })
    }

    fetch(API_URL, options)
    .then(res => res.json())
    .then(receivedMessage => setHappyList([...happyList, receivedMessage]))  
  }

  const onHeartsIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(HEART_URL(id), options)
      .then(res => res.json())
      .then (receivedMessage => {
        const updatedHappyList = happyList.map(message => {
          if (message._id === receivedMessage._id) {
            message.hearts += 1
         } 
         return message 
       })
       setHappyList(updatedHappyList)

      })
    .catch(err => console.log(err))

  }

    return (
      <div>
        <form onSubmit={onFormSubmit}>
          <label htmlFor='newMessage'>What makes you happy right now!</label>
          <input id='newMessage'
            type='text'
            value={newMessage}
            onChange={onNewMessageChange}
          />
          <button type='submit'>Send happy thoughts!</button>
        </form>
        {happyList.map(message =>(
          <div key={message._id}>
            <h4>{message.message}</h4>
            <button onClick={ () => onHeartsIncrease(message._id)}>
              {message.hearts}
              ❤️
            </button>
            <p>-{moment(message.createdAt).fromNow()}</p>
          </div>
        ))}
      </div>
    )
}
