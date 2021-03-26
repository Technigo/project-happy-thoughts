import React, { useState, useEffect } from 'react'


import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

import { HAPPY_URL, POST_URL, LIKES_URL } from './links/reuseble/urls';


export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messsageNew, setMessageNew] = useState('');

  useEffect(() => {
    fetchMessageList();
  }, [])

  const fetchMessageList = () => {
    fetch(HAPPY_URL)
    .then(res => res.json())
    .then (data => setMessageList(data));
  }

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messsageNew })
    };

    fetch(POST_URL, options)
      .then (res => res.json())
      .then(() => fetchMessageList())
  }

  const handleLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(LIKES_URL(id), options)
      .then(res => res.json())
      .then (() => fetchMessageList()) 
  }
  
  return (

    <div>
      <MessageForm 
        messsageNew={messsageNew}
        onMessageNewChange={handleMessageNewChange}
        onFormSubmit={handleFormSubmit}
      />
      <MessageList 
        messageList={messageList} 
        handleLikesIncrease={handleLikesIncrease}
      />
    </div>
  )
}
