
import React, { useState, useEffect } from 'react'

import MessageList from './components/MessageList'
import Header from './components/Header'
import MessageForm from 'components/MessageForm'

import { API_URL } from './reusable/urls'

export const App = () => {

  const [newMessage, setNewMessage] = useState('')
  const [MessageListArray, setMessageListArray] = useState([])

  useEffect(() => {
    fetchMessageList();
  }, [])

  const fetchMessageList = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(messages => setMessageListArray(messages))
    .catch(err => console.log(err));
  }

  const newMessageChange = (event) =>{
    setNewMessage(event.target.value);
  }

  const options = {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: newMessage})
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted', newMessage)

    fetch(API_URL, options)
    .then(res => res.json())
    .then(happyMessage => setMessageListArray([happyMessage,...MessageListArray]));

  }

  return (
    <div className="main">

      <Header />

      <MessageForm
      onFormSubmit={onFormSubmit}
      newMessage={newMessage}
      newMessageChange={newMessageChange}
      />

      <MessageList
        MessageListArray={MessageListArray}
      />

    </div>
  )
}
