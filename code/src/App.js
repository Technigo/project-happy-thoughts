import React, { useState, useEffect } from 'react';

import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { MESSAGE_URL } from './urls';

export const App = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(MESSAGE_URL)
      .then(res => res.json())
      .then(data => setMessages(data))
  }

  const reachMessageInput = (newMessage) => {
    fetch(MESSAGE_URL,  {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ message: newMessage })
    })
    .then(() => fetchMessages())
  }

  const updateLikes = messageId => {    
    const updatedMessages = messages.map(message => {
      if (message._id === messageId) {
        message.hearts += 1;
        console.log("message: " + message.message)
      }
      return message;
    })
    setMessages(updatedMessages);
  }

  const onLiked = (messageId) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like`, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: ''
    }).then(() => updateLikes(messageId))
  }

  return (
    <div>
      <MessageInput onMessageChange={reachMessageInput}/>
      <MessageList messageList={messages} onLiked={onLiked}/>
    </div>
  )
}
