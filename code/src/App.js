import React, { useState, useEffect, useRef } from 'react';

import Header from './Header';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import LoadingState from './LoadingState';

import { API_URL, API_URL_HEART, API_URL_DELETE, API_URL_PATCH } from './reusable/urls';

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [newUser, setNewUser] = useState(''); 
  const [newTag, setNewTag] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    fetchMessageList();
  }, []);  

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))   
  };

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleNewUser = (event) => {
    setNewUser(event.target.value);
  };

  const handleNewTag = (event) => {
    setNewTag(event.target.value);
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
      textareaRef.current.focus();
      return;
    }

    const config = {   
        method: 'POST', 
        headers: {              
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newMessage, user: newUser ? newUser : 'Anonymous', tag: newTag })     
    };

    setLoading(true);

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
      })
      .finally(() => setLoading(false));

    setNewMessage('');
    setNewUser('');
    setNewTag('');
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
      .then(() => fetchMessageList());    
  };

  const handleDeleteMessage = (id) => {
    const config = {   
      method: 'DELETE', 
      headers: {              
        'Content-Type': 'application/json'
      }
    };

    setLoading(true);

    fetch(API_URL_DELETE(id), config)
      .then(res => res.json())
      .then(() => fetchMessageList())
      .finally(() => setLoading(false));
  };

  const handleUpdateMessage = (message) => {
    const config = {   
      method: 'PATCH', 
      headers: {              
        'Content-Type': 'application/json'
      },       
      body: JSON.stringify({ message: message.message })   
    };

    setLoading(true);

    fetch(API_URL_PATCH(message._id), config)
      .then(res => res.json())
      .then(() => fetchMessageList())
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <MessageForm 
            newMessage={newMessage}
            handleNewMessage={handleNewMessage}
            newUser={newUser}
            handleNewUser={handleNewUser} 
            newTag={newTag}
            handleNewTag={handleNewTag}
            errorMessage={errorMessage}
            onFormSubmit={handleFormSubmit}  
            textareaRef={textareaRef}
          />
          {loading && <LoadingState />}
          <MessageList 
            messageList={messageList}
            handleHeartClick={handleHeartClick}
            handleDeleteMessage={handleDeleteMessage}
            handleUpdateMessage={handleUpdateMessage}
          />
        </div>
      </main>
    </>
  );
};

export default App;