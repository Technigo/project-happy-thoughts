import React, { useState, useEffect } from 'react';

import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MESSAGE_URL } from './urls';

import './app.css';

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
      }
      return message;
    })
    setMessages(updatedMessages);
  }

  const onLiked = (messageId) => {
    fetch(MESSAGE_URL+`${messageId}/like`, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: ''
    }).then(() => updateLikes(messageId))
  }

  return (
    <div className="main">
      <Header headerText="Post a happy thought."/>
      <MessageInput onMessageChange={reachMessageInput}/>
      {messages.map(message => (
        <MessageList key={message._id} message={message} onLiked={onLiked}/>
      ))}
      <Footer author="Petra Almgren" />
    </div>
  )
}
