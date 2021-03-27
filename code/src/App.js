import React, { useState, useEffect } from 'react';

import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
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
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err));
  }

  const onMessageNewChange = (event) => {
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
  .then(() => {
    window.location.reload()
  })
  .then(receivedMessage => setMessageList([receivedMessage, ...messageList]));
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
  .then(() => {
    window.location.reload()
  })
  .then(receivedMessage => {
    const updatedMessageList = messageList.map(message => {
      if (message._id === receivedMessage._id) {
        message.likes += 1;
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
        messageNew={messageNew}
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


