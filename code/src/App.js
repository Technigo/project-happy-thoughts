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
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => {
        console.log(messages);
        setMessageList(messages)
      })
      .catch(err => console.error(err));
  }

  const onNewMessageChange = (event) => {
    console.log(event.target.value);
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
      .then(receivedMessage => setMessageList([receivedMessage, ...messageList]))
      .catch(err => console.error(err));
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
      .catch(err => console.error(err));
  }

  return (
    <div>
      <Form 
        newMessage={newMessage}
        onNewMessageChange={onNewMessageChange}
        onFormSubmit={onFormSubmit}
      />
      <MessageList 
        messageList={messageList}
        onHeartClick={onHeartClick}
      />
    </div>
  )
}
