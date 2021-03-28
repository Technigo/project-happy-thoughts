/*Outer Dependencies */
import React, { useState, useEffect } from 'react';
import moment from 'moment';

/* Local Dependencies */
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
      .then(recievedMessage => setMessageList([...messageList, recievedMessage]))
      .catch(err => console.error(err));
  }

  const onLikesIncrease = (messageID) => {
    fetch(LIKES_URL(messageID))
  }

  console.log(messageList);

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
      {messageList.map(messagePost => (
        <div key={messagePost._id}>
          <h4>{messagePost.message}</h4>
          <button onClick={() => onLikesIncrease(messagePost._id)}>
            {messagePost.hearts}
            ❤
          </button>
          <p className="date">-{moment(messagePost.created).fromNow()}</p>
        </div>
      ))}
    </div>
  )
  }
