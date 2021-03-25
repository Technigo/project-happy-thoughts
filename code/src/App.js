import React, { useState, useEffect } from 'react';

import moment from 'moment';

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
  .then(receivedMessage => setMessageList([...messageList, receivedMessage]));
}

const onLikesIncrease = (id) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  fetch(LIKES_URL(id), options)
  .then(res => res.json())
  .then(recievedMessage => {
    const updatedMessageList = messageList.map(message => {
      if (message._id === recievedMessage._id) {
        message.likes += 1;
      }
      return message;
    });
        setMessageList(updatedMessageList);
    })
  .catch(err => console.error(err));
}

console.log(messageList);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='newMessage'>Write new message!</label>
        <input
          id='newMessage'
          type='text'
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button type='submit'>Send message!</button>
      </form>
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.message}</h4>
          <button onClick={() => onLikesIncrease(message._id)}>
            {message.likes}
            ♥
          </button>
          <p className="date">- {moment(message.created).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}


