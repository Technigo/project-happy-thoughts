import React, { useState, useEffect } from 'react';

import InputMessage from './Components/InputMessage';
import MessageList from './Components/MessageList';
import Footer from './Components/Footer';
import { MESSAGES_URL } from './urls';

// App is responsible for connection to server
export const App = () => {

  const [listOfMessages, setListOfMessages] = useState([]);

  

  // after return jsx, after app mounted, useeffect will run, do a fetch
  useEffect(() => {
    fetchMessages();
  }, []); // only as mounted not updated


  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const filteredMessages = data.filter(message => message.message)
        setListOfMessages(filteredMessages);
      })
      .catch(error => console.log("error:", error));
  }

  //Take value and pass it to server, POST request
  const reachMessageInput = (newMessage) => {
    console.log(newMessage);
    fetch(MESSAGES_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMessage }) //data we want to post
      })
      .then(() => fetchMessages()); //after post run fetchmessages, component rerenders    
  }
  
  return (
    <>
      <InputMessage
        onMessageChange={reachMessageInput}
        setListOfMessages={setListOfMessages}
      />
      <MessageList
        listOfMessages={listOfMessages}
        setListOfMessages={setListOfMessages}
      />
      <Footer />
    </>
  )
}
