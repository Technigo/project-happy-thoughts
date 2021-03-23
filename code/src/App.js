import React, { useState, useEffect } from 'react';
import moment from 'moment';  

import HeartButton from './HeartButton';

import API_URL from './reusable/urls';

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState(''); 

  useEffect(() => {
    fetchMessageList();
  }, []);  

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))   // set this in a separate component
      .catch(err => console.error(err));      
  };

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {   
        method: 'POST', 
        headers: {              //specific information for the backend application
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newMessage })     //we are just sending an object with text
    };

    fetch(API_URL, options)      
      .then(res => res.json())
      .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
      .catch(err => console.error(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newMessage">What's making you happy right now?</label>
        <input
          id="newMessage"
          type="text"
          value={newMessage}
          onChange={handleNewMessage}
        />
        <button type="submit">Send happy thought</button>
      </form>

      {messageList.map(message => (
       <div key={message._id}>
         <h4>{message.message}</h4>
         <p>- {moment(message.createdAt).fromNow()}</p>
       </div> 
      ))}      
    </>
  )
};

export default App;