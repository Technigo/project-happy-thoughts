import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL } from './urls';

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
      body: JSON.stringify({ text: messageNew })
    };

    fetch(API_URL, options)
      .then(res => res.json())
      .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <form className="message-form" onSubmit={onFormSubmit}>
        <label className="form-title" htmlFor="newMessage">Write a happy message below and click send!</label>
        <input
          className="text-area"
          id="newMessage"
          type="text"
          maxLength="140"
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button type="submit">Send message!</button>
      </form>
      {messageList.map(message => (
        <div className="message-card" key={message._id}>
          <h4>{message.text}</h4>
          <p className="date">- {moment(message.created).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
