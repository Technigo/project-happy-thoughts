import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL, API_URL_POST, API_URL_LIKES } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState(['']);

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

    const options ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: messageNew })
    }

    fetch(API_URL_POST, options)
      .then(res => res.json())
      .then(recievedMessage => setMessageList([...messageList, recievedMessage]));
  }

  const onLikesIncrease = () => {
    fetch(API_URL_LIKES())
  }

  console.log(messageList);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">write new message</label>
        <input
          id="newMessage"
          type="text"
          value={messageNew}
          onChange={onMessageNewChange}
          />
          <button type="submit">Send Message!</button>
      </form>
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.text}</h4>
          <button onClick={onLikesIncrease(message._id)}>
            {message.message}
            ❤️
          </button>
          <p className="date">-{moment(message.createdAt).fromNow()}</p>
        </div>


      ))}
     
    </div>
  )
}
