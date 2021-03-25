import React, { useState, useEffect } from 'react'


import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'
import { API_URL, LIKES_URL } from './reusable/urls'

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState('');


  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(messages => setMessageList(messages))
    .catch(err => console.error(err));
  }

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageNew})
    }
    
    fetch(API_URL, options)
    .then(res => res.json())
    .then(receivedMessage => setMessageList([receivedMessage,...messageList]));
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
    .then(receivedMessage => {
      const updatedMessageList = messageList.map(message => {
        if(message._id === receivedMessage._id){
          message.hearts += 1;
        } 
        return message;
      });
      setMessageList(updatedMessageList);
    })
    .catch(error => console.error(error))
  }

  return (
    <div className="main-container">
     <MessageForm 
     newMessage = {messageNew}
     onMessageNewChange = {handleMessageNewChange}
     onFormSubmit = {handleFormSubmit}
     />
     <MessageList 
     messageList = {messageList}
     handleLikesIncrease = {handleLikesIncrease}
     />
     
    </div>
    
  )
}
