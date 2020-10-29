import React, { useState, useEffect } from 'react';

import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
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

  //fetch GET messages from the API
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

  //fetch POST message to the API
  const postMessage = message => {
    console.log(message);
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message }),
    })
      .then(() => fetchMessages())
      .catch(error => console.error(error));
  };

  //fetch POST like to the API's other endpoint
  const postLike = id => {
    console.log(id);
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
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
        <Loader className="loader" />
      ) : (
        <MessageList messageList={messages} onLikeChange={postLike} />
      )}
    </main>
  );
};
