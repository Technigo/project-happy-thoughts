import React, { useState, useEffect } from 'react';

import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';
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
  };

  const postSingleMessage = (newMessage) => {
    fetch(THOUGHTS_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMessage })
      })
      .then(() => fetchMessages())
      .then(() => window.location.reload())
      .catch((error) => {
        console.error(error);
      })
  };

  const onLiked = (messageId) => {
    // eslint-disable-next-line no-undef
    const updatedMessage = message.map((message) => {
      // eslint-disable-next-line no-underscore-dangle
      if (message._id === messageId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(updatedMessage)
  };

  return (
    <div>
      <MessageForm onMessageChange={postSingleMessage} />
      <MessageList
        messageList={messages}
        onLiked={onLiked} />
    </div>
  );
};