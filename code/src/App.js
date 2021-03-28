import React, { useState, useEffect } from 'react';

import Header from './Header';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

import { API_URL, API_URL_HEART } from './reusable/urls';

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

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

  const validateFormInput = () => {
    let isFormValid = true;

    if (newMessage.length < 5) {
      setErrorMessage('You can only send a message containing a minimum of 5 characters.'); 
      isFormValid = false;
    } else if (newMessage.length > 140) {
      setErrorMessage('You can only send a message containing a maximum of 140 characters.');
      isFormValid = false;
    } else {
      setErrorMessage('');
      isFormValid = true;
    }

    return isFormValid;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateFormInput()) {
      return;
    }

    const config = {   
        method: 'POST', 
        headers: {              
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newMessage })     
    };

    fetch(API_URL, config)      
      .then(res => {
        if (res.ok) {
          return res.json();
        } 
        throw new Error('Error! Something went wrong. Try again!')
      })
      .then(() => fetchMessageList())     
      .catch(err => {
        setErrorMessage(err.message);
      });      

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
      .then(() => fetchMessageList())    
      .catch(err => console.error(err));
  };

  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <MessageForm 
            newMessage={newMessage}
            handleNewMessage={handleNewMessage}
            errorMessage={errorMessage}
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