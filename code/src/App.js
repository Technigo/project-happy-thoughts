import React, { useState, useEffect } from 'react';
import './fontawesome'

import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import { API_URL, LIKES_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => {
        setMessageList(messages)
        console.log(messages);
  })
      .catch(err => console.error(err));
  }

  const onMessageNewChange = (event) => {
    setNewMessage(event.target.value);
}

const onFormSubmit = (event) => {
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
  .then(receivedMessage => setMessageList([...messageList, receivedMessage]));
}

const onHeartLikes = (id) => {
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
      if (message._id === receivedMessage._id) {
        message.hearts += 1;
      }
      return message;
    });
        setMessageList(updatedMessageList);
    })
  .catch(err => console.error(err));
}


  return (
    <div>
      <MessageForm
        newMessage={newMessage}
        onMessageNewChange={onMessageNewChange}
        onFormSubmit={onFormSubmit}
      />
      <MessageList
        messageList={messageList}
        onHeartLikes={onHeartLikes}
      />

    </div>
  )
}


