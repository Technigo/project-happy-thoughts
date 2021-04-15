import React, { useState, useEffect } from 'react'

import { API_URL, API_URL_LIKES } from './reusable/urls';

import { MessageList } from './components/MessageList'
import { MessageForm } from './components/MessageForm'

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err));
      
  }

  const onMessageNewChange = (event) =>{
    setMessageNew(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: messageNew })
      };

      fetch(API_URL, options)
        .then(res => res.json())
        .then(() => fetchMessageList())
        .then(() => setMessageNew(''))
        .catch(err => console.error(err));
    }

  const onLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(API_URL_LIKES(id), options)
      .then(res => res.json())
      .then(() => fetchMessageList())
      .catch(err => console.erroe(err));
  }

  return (
    <div className="main-forms-wrapper">
      <div className="submit-message-container">
        <MessageForm 
          messageNew={messageNew} 
          onMessageNewChange={onMessageNewChange} 
          onFormSubmit={onFormSubmit} 
          />
      </div>
      <MessageList 
        messageList={messageList} 
        onLikesIncrease={onLikesIncrease}
      />
    </div>
  )
}
