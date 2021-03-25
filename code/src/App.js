import React, { useState, useEffect } from 'react'
/* import moment from 'moment'  */

import { API_URL } from './reusable/url'
 
export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState(' ')

  useEffect(() => {
    fetchMessageList();

  },[])

    const fetchMessageList = () => {
      fetch(API_URL)
      .then(res => res.json())
      .then(message => setMessageList(message))
      .catch(err => console.error(err)) 
    }

    const onNewMessageChange = (event) => {
      setNewMessage(event.target.value)
    }

    const onFormSubmit = (event) => {
      event.preventDefault()
      console.log('Form submitted!', newMessage)
    }

    return (
    <div>
       <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">Write new message!</label>
        <input
          id="newMessage"
          type="text"
          value={newMessage}
          onChange={onNewMessageChange}
        />
        <button type="onSubmit">Send message!</button>
      </form> 
      
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.message}</h4>
          <p className ="date-created">-{new Date(message.createdAt).toDateString()}</p> 
        </div>  
      ))}
    </div>
  )
}