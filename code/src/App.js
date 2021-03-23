import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { THOUGHTS_URL } from './reusable/urls'

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

    const options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ message: newMessage }) 
    }
    fetch(THOUGHTS_URL, options)
    .then(res => res.json())
    .then(postMessage => setMessageList([...messageList, postMessage]))
  }

  


  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='newMessage'>Write your happy shit here</label>
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
          <p>{moment(message.createdAt).fromNow()}</p>
        </div>
      )
        )}
    </div>
  )
}
