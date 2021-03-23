import moment from 'moment';
import React, { useState, useEffect } from 'react'

// import{ Form } from './Components/Form';
import { API_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err));
      console.log(messages);
  }

  return (
    <div>
      {/* <Form /> */}
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.text}</h4>
          <p>{moment(message.created).fromNow()}</p>
        </div> 
      ))}
    </div>
  )
}
