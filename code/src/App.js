import moment from 'moment';
import React, { useState, useEffect } from 'react'

import { API_URL, API_URL_LIKES } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err));
  }
  

  const onMessageNewChange = (event) =>{
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
      .then(receivedMessage => setMessageList([receivedMessage,...messageList]))
      .catch(err => console.error(err));
  }

  const onLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(API_URL_LIKES(id), options)
      .then(res => res.json())
  
      .then(() => fetchMessageList())
      .catch(err => console.erroe(err));
  }

  return (
    <div className="main-forms-wrapper">
      <div className="submit-message-container">
        <form onSubmit={onFormSubmit}>
          <label htmlFor="newMessage" className="label-input-message">Share your happy thoughts!</label>
          <input
            className="message-input"
            id="newMessage"
            type="text"
            value={messageNew}
            onChange={onMessageNewChange}
          />
          <button 
          className="button-submit"
          type="submit"
          >
            ❤️ Spread the joy ❤️
          </button>
        </form>
      </div>
        {messageList.reverse().map(message => [
          <div key={message._id} className="message-container">  
            <h3>{message.message}</h3>
            <div className="likes-date-container">
              <div className="hearts-likes-wrapper">
                <button className="button-likes" onClick={() =>onLikesIncrease(message._id)}>
                  ❤️
                </button>
                <p> x{message.hearts}</p>
              </div>
              <p className="date-posted">{moment(message.created).fromNow()} </p>
            </div>
          </div>
        ])}
      
    </div>
  )
}
