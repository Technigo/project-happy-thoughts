/*Outer Dependencies */
import React, { useState, useEffect } from 'react';
import moment from 'moment';

/* Local Dependencies */
import { API_URL } from './reusable/urls';

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

  const onMessageNewChange = (event) => {
    setMessageNew(event.target.value);
  }

  const onFormSubmit = (event) => {
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
      .then(recievedMessage => setMessageList([...messageList, recievedMessage]));
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">Write new message!</label>
        <input
          id="newMessage"
          type="text"
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button type="submit">Send message!</button>
      </form>
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.message}</h4>
          <p className="date">-{moment(message.created).fromNow()}</p>
        </div>
      ))}
    </div>
  )
  }
