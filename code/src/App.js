/*Outer Dependencies */
import React, { useState, useEffect } from 'react';
import moment from 'moment';

/* Local Dependencies */
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import MessageElement from './components/MessageElement';

import { API_URL, LIKES_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState('');

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(recievedMessages => setMessageList(recievedMessages))
      .catch(err => console.error(err));
  }

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {      
        method: 'POST',
        headers: {
          'Content-Type':  'application/json'
        },
        body: JSON.stringify({ message: messageNew })
      };    
    
    fetch(API_URL, options)
      .then(res => res.json())
      .then(recievedMessage => setMessageList([...messageList, recievedMessage]))
      .catch(err => console.error(err));
  }

  const handleLikesIncrease = (messageID) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(LIKES_URL(messageID), options)
      .then(res => res.json())
      .then((recievedMessage) => {
        const updatedMessageList = messageList.map(messagePost => {
          if (messagePost._id === recievedMessage._id) {
            messagePost.hearts += 1;
          }
          return messagePost;
        });
        setMessageList(updatedMessageList);
      })
      .catch(err => console.error(err));
  }  

  return (
    <div>
      <MessageForm 
        onFormSubmit={handleFormSubmit}
        messageNew={messageNew}
        onMessageNewChange={handleMessageNewChange}        
      />
      <MessageList 
        messageList={messageList} 
        handleLikesIncrease={handleLikesIncrease}
      />
    </div>
  )
  }
