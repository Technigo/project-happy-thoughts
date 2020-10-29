import React, { useState, useEffect } from 'react';

import { MessageList } from 'components/MessageList';
import { MessageInput } from 'components/MessageInput'
import { MESSAGE_URL } from './url'; 
import './index.css'

export const App = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
  fetchMessages();
}, []);

const fetchMessages = () => {
  fetch(MESSAGE_URL)
    .then(res => res.json())
    .then(data => setMessages(data.reverse()))
    .catch(error => console.error(error))
  }

  const reachMessageInput = (newMessage) => {
    fetch(MESSAGE_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ message: newMessage })
    }).then(() => fetchMessages());
  }

  return (
    <main>
      <MessageInput onMessageChange={reachMessageInput}/>
      <MessageList messageList={messages}/>
    </main>
  )
}
