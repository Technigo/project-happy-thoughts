import React, { useState, useEffect } from 'react';

import MessageForm from './MessageForm';
import MessageList from './MessageList';

import { API_URL, API_URL_GET_HEART } from './reusable/urls';

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
    setNewMessage('');

    const config = {   
        method: 'POST', 
        headers: {              //specific information for the backend application
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newMessage })     //we are just sending an object with text
    };

    fetch(API_URL, config)      
      .then(res => res.json())
      // .then(receivedMessage => setMessageList([receivedMessage, ...messageList])) //Update local state
      .then(() => fetchMessageList())     //refetch data from server
      .catch(err => console.error(err));
  };

  const handleHeartClick = (id) => {
    const config = {   
      method: 'POST', 
      headers: {              
        'Content-Type': 'application/json'
      }
    };

    fetch(API_URL_GET_HEART(id), config)
      .then(res => res.json())
      // .then(receivedHeart => {          //we get back updated object from server, this is the newest message of this. 
      //   const updatedMessageList = messageList.map(message => {    //update local state
      //     if (message._id === receivedHeart._id) {
      //       message.hearts += 1;
      //     } 
      //     return message;
      //   });
      //   setMessageList(updatedMessageList);
      // })
      .then(() => fetchMessageList())     //refetch data from server
      .catch(err => console.error(err));
  };

  return (
    <>
      <MessageForm 
        newMessage={newMessage}
        onNewMessage={handleNewMessage}
        onFormSubmit={handleFormSubmit}  
      />
      <MessageList 
        messageList={messageList}
        handleHeartClick={handleHeartClick}
      />
    </>
  );
};

export default App;