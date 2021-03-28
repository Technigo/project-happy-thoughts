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

  return (
    <div>
      <form>
        <label htmlFor="newMessage">Write new message!</label>
        <input
          id="newMessage"
          type="text"
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button type="submit">Send message!</button>
      </form>
      {messageList.map(recievedMessage => (
        <div key={recievedMessage._id}>
          <h4>{recievedMessage.message}</h4>
          <p className="date">-{moment(recievedMessage.created).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
