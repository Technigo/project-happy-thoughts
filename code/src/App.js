import React, { useState, useEffect } from 'react'
/* local dependencies */
import { API_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(recievedMessages => setMessageList(recievedMessages))
      .catch(err => console.error(err));
  }


  return (
    <div>
      {messageList.map(recievedMessage => (
        <div key={recievedMessage._id}>
          <h4>{recievedMessage.message}</h4>
          <p>{new Date(recievedMessage.createdAt).toDateString()}</p>
        </div>
      ))}
    </div>
  )
}
