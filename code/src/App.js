import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL, API_URL_POST } from './reusable/urls';

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
          <button type="submit">Send Message</button>
      </form>
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.text}</h4>
          <p className="date">{moment(message.created).fromNow()}</p>
        </div>


      ))}
     
    </div>
  )
}
