import React, { useState, useEffect } from 'react';

import MessageForm from './MessageForm';
import MessageList from './MessageList';

import { API_URL, API_URL_HEART } from './reusable/urls';

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState(''); 

  useEffect(() => {
    fetchMessageList();
  }, []);  

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))   
      .catch(err => console.error(err));      
  };

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const config = {   
        method: 'POST', 
        headers: {              //specific information for the backend application
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newMessage })     //we are just sending an object with text
    };

    fetch(API_URL, config)      
      .then(res => res.json())
      .then(() => fetchMessageList())     //refetch data from server
      .catch(err => console.error(err));

    setNewMessage('');
  };

  const handleHeartClick = (id) => {
    const config = {   
      method: 'POST', 
      headers: {              
        'Content-Type': 'application/json'
      }
    };

    fetch(API_URL_HEART(id), config)
      .then(res => res.json())
      .then(() => fetchMessageList())     //refetch data from server
      .catch(err => console.error(err));
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <MessageForm 
            newMessage={newMessage}
            handleNewMessage={handleNewMessage}
            onFormSubmit={handleFormSubmit}  
          />
          <MessageList 
            messageList={messageList}
            handleHeartClick={handleHeartClick}
          />
        </div>
      </main>
    </>
  );
};

export default App;