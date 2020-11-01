import React, { useState, useEffect } from 'react';

import { MessageList } from 'components/MessageList';
import { MessageInput } from 'components/MessageInput';
// import { MESSAGES_URL } from './Urls';

// MIGHT PUT STYLING IN SEPARAT COMPONENTS IF TIME
// import { messageList } from 'components/messageList.css';
// import { messageInput } from 'components/messageInput.css';



export const App = () => {

  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const LIKEDHEARTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like";
  
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then(res => res.json())
      .then(data => setMessages(data.reverse()))
      .catch(error => console.error(error));
  }

  const postSingleMessage = newMessage => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage })
     
    })
      .then(() => fetchMessages())
      .catch(error => console.error(error));
  }

const Likedhearts = messageId => {
  fetch(LIKEDHEARTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }).then (() => {
    hearts(messages._id);
    fetchMessages();
});
};

const hearts = messageId => {
  const updatedMessage = messages.map(messages => {
    if (messages._id === messageId) {
      messages.hearts += 1
    }
    return messages    
  })
  setMessages(updatedMessage)
};


return (
  <div className="message-container">
    <MessageInput onMessageChange={postSingleMessage} />
    <MessageList  message={fetchMessages} />

  </div>
);
}