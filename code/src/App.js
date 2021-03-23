import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL } from './reuseable/urls';

export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchMessageList(); 
  }, []); // Calling the component only when it´s mounted

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json()) //Unpacking the data
      .then(message => setMessageList(message))
      .catch(err => console.error(err)); //Catch handler showing error message if something breaks
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
      .then(postMessage => setMessageList([...messageList, postMessage])) 
  }


  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">write your happy thoughts</label>
        <input 
        id="newMessage" 
        type="text" 
        value={newMessage}
        onChange={onNewMessageChange}
        >  
        </input>
        <button type="submit">Send HAPPY thought!</button>
      </form>
      {messageList.map(message => (
          <div key={message._id}>
            <h4>{message.message}</h4>
            <p>-{moment(message.createdAt).fromNow()}</p>
          </div>
        ))} 
    </div>
  )
}
