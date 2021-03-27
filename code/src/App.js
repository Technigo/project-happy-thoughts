import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL, LIKES_URL } from './reusable/url' 

import MessageForm from 'components/MessageForm'

export const App = () => {
  
  //State variables 
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState(' ')
  
  // Hook that will call the function after component is mounted
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
        .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
  
      }

    const onLikesIncrease = (id) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
       
      };

      fetch(LIKES_URL(id), options)
        .then(res => res.json())
        .then(receivedMessage => {
          const updatedMessageList = messageList.map(message => {
            if (message._id === receivedMessage._id){
              message.hearts += 1;
            }
            return message
          })
          setMessageList(updatedMessageList) 
        })  

        .catch(err => console.error(err))
    } 

   
    /* console.log(messageList) */
    
    return (
      <div>
        <MessageForm
        newMessage = {newMessage}
        onFormSubmit = {handleFormSubmit}
        onNewMessageChange = {handleNewMessageChange}
        />
        
        
        {/* Iterating over the array of messages. This is a representation of asingle message */}
        
        {messageList.map(message => (
          <div key={message._id}>
            <h4>{message.message}</h4>
            <button onClick= { () => onLikesIncrease(message._id)}>
              {message.hearts}
              ♥️
            </button> 
            <p className ="date-created">-{moment(message.createdAt).fromNow()}</p> 
          </div>  
        ))}
      </div>
  )
}