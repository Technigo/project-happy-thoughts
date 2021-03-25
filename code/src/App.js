import React, { useState, useEffect } from 'react';

import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'

import { API_URL, LIKES_URL } from './reuseable/urls';

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

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleFormSubmit = (event) => {
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
      .catch(err => console.error(err)); 
  }

  const handleLikesIncrease = (id) => {
    
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
        });
        setMessageList(updatedMessageList);
      })
      .catch(err => console.err(err))
  }

  return (
    <div>
      <MessageForm 
        newMessage={newMessage} 
        onNewMessageChange={handleNewMessageChange}
        onFormSubmit={handleFormSubmit}
      />
      <MessageList 
        messageList={messageList} 
        handleLikesIncrease={handleLikesIncrease}
      />
    </div>
  )
}
