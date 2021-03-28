import React, { useState, useEffect } from 'react'

import { API_URL, LIKES_URL } from './reusable/url' 

import MessageForm from 'components/MessageForm'
import MessageList from 'components/MessageList'


export const App = () => {
  
  //State variables 
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState(' ')
  

  // Hook that will call the function after component is mounted, this is indicated in the second argument.It is placed under the state initialization.
  useEffect(() => {
    fetchMessageList();
  },[])
  
  //Function to fetch message list from outer API
  const fetchMessageList = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(message => setMessageList(message))
    .catch(err => console.error(err)) 
  }

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  }  

  //Function that will prevent the form to refresh and that will send the POST request
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newMessage })
      };
  
      fetch(API_URL, options)
        .then(res => res.json())
        .then(() => fetchMessageList ())
        .catch(err => console.error(err))
        setNewMessage('')
      }

    const handleLikesIncrease = (id) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
       
      };

      fetch(LIKES_URL(id), options)
        .then(res => res.json())
        .then(() => fetchMessageList())
        .catch(err => console.error(err))
    } 

   
      return (
        <main className="main-container">
          <MessageForm
          newMessage = {newMessage}
          onFormSubmit = {handleFormSubmit}
          onNewMessageChange = {handleNewMessageChange}
          />

          <MessageList 
          messageList = {messageList}
          handleLikesIncrease = {handleLikesIncrease}
          />
        </main>
  )
}