import React, { useState, useEffect } from 'react';

import InputMessage from './Components/InputMessage';
import MessageList from './Components/MessageList';
import Footer from './Components/Footer';
import { MESSAGES_URL } from './urls';


export const App = () => {
  const [listOfMessages, setListOfMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []); 

  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
        // Sorts the data depending on timestamp
        const sortedMessages = [...data];
        sortedMessages.sort((a, b) => (Date.parse(b.createdAt) - Date.parse(a.createdAt)));
        
        // Filters the sorted data to remove empty messages
        const filteredMessages = sortedMessages.filter(message => message.message)
        setListOfMessages(filteredMessages);
      })
      .catch(error => console.log("error:", error));
  }

  //Take value and pass it to server, POST request
  const reachMessageInput = (newMessage, name) => {
    fetch(MESSAGES_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMessage, name }) //data we want to post
      })
      .then(() => fetchMessages()); //after post run fetchmessages, component rerenders    
  }
  
  return (
    <>
      <InputMessage
        onMessageChange={reachMessageInput}
      />
      <MessageList
        listOfMessages={listOfMessages}
        setListOfMessages={setListOfMessages}
      />
      <Footer />
    </>
  )
}
