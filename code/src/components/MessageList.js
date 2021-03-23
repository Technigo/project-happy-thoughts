import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL } from '../reusable/urls'


const MessageList = () => {

  const [MessageList, setMessageList] = useState([])
  console.log(MessageList)

  useEffect(() => {
    fetchMessageList();
  }, [])

const fetchMessageList = () => {
  fetch(API_URL)
  .then(res => res.json())
  .then(messages => setMessageList(messages))
  .catch(err => console.log(err));
}

  return (
    <div className="message-list-container">
      {MessageList.map(message => (
        <div className= "thoughts-card" key={message._id}>
          <h4 className="message-text">{message.message}</h4>
        <div className="created-and-likes">
          <p>heart x {message.hearts}</p>
          <p className="created">{moment(message.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
     </div>
  )
}

export default MessageList;