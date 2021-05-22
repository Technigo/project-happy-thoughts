import React, { useState, useEffect } from 'react';
import './fontawesome'


// COMPONENTS
import{ Form } from './Components/Form';
import{ MessageList } from './Components/MessageList';

// URLS
import { API_URL } from './reusable/urls';
import { HEART_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => {
        setMessageList(messages);
      })
  }

  const onNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  }

  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage, name })
    };

    fetch(API_URL, options)
      .then(res => res.json())
      .then(receivedMessage => setMessageList([receivedMessage, ...messageList]))
      .then(() => {
        setNewMessage('');
        setName('');
      })
  };

  const onHeartClick = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(HEART_URL(id), options)
      .then(res => res.json())
      .then((receivedMessage) => {
        const updatedMessageList = messageList.map(message => {
          if (message._id === receivedMessage._id) {
            message.hearts += 1;
          }
          return message;
        });
        setMessageList(updatedMessageList)
      })
  }

  return (
    <div>
      <Form 
        newMessage={newMessage}
        name={name}
        onNewMessageChange={onNewMessageChange}
        onNameChange={onNameChange}
        onFormSubmit={onFormSubmit}
      />
      <MessageList 
        messageList={messageList}
        onHeartClick={onHeartClick}
      />
    </div>
  )
}
