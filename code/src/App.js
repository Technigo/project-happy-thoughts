import React, { useState, useEffect } from 'react';

import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { THOUGHTS_URL } from './urls';

export const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }

  const postSingleMessage = (newMessage) => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage })
    })
      .then(() => fetchMessages())
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <MessageInput onMessageChange={postSingleMessage} />
      <MessageList messageList={messages} />
    </div>
  );
};