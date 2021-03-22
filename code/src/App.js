import React, { useState, useEffect} from 'react'
import moment from 'moment';

import { API_URL } from './reusable/url'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {//when mounted or when unmounted
    fetchMessageList()
  }, []) // If it should always be called we do not set a second argument with a comma , 

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err));
  
  }

  const onNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    fetch(API_URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage }) 
    })
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label className="message-input" htmlFor="newMessage">&hearts; Your happy thoughts here &hearts;</label>
        <input
          id="newMessage"
          type="text"
          value={newMessage}
          onChange={onNewMessageChange}
        >
        </input>
        <button type="submit">Upload thought</button>
      </form>
      {messageList.map(text => (
       <div key={text._id}>
         <h4>{text.message}</h4>
         <p className="date">- {moment(text.createdAt).fromNow()}</p>
       </div>
      ))}
    </div>
  )
}
