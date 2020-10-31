import React, { useState, useEffect } from 'react';

import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import Loader from './components/Loader';
import { MESSAGES_URL } from './urls';

import './components/Styles.scss';

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
    setInterval(fetchMessages, 5000);
  }, []);

  //fetch GET messages from the API, set messages and catch errors
  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then(results => results.json())
      .then(data => {
        const filteredData = data.filter(post => {
          return post.message;
        });
        setMessages(filteredData);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };

  //fetch POST message to the API and then fetch GET all messages
  const postMessage = message => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message }),
    })
      .then(() => fetchMessages())
      .catch(error => console.error(error));
  };

  //fetch POST like to the API's other endpoint and then fetch GET all messages
  const postLike = id => {
    fetch(`MESSAGES_URL/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: '',
    })
      .then(() => fetchMessages())
      .catch(error => console.error(error));
  };

  return (
    <main className="App App__grid">
      <MessageInput onMessageChange={postMessage} />
      {isLoading ? (
        <Loader className="Loader" />
      ) : (
        <MessageList messageList={messages} onLikeChange={postLike} />
      )}
    </main>
  );
};
