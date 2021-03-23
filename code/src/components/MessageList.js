import React, { useState, useEffect } from 'react';

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
    <div>
      {MessageList.map(message => (
        <div key={message._id}>
          <h4>{message.message}</h4>
          <p>{message.createdAt}</p>
          <p>Number of likes:{message.hearts}</p>
        </div>
      ))}
     </div>
  )
}

export default MessageList;