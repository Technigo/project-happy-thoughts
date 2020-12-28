import React, { useState, useEffect } from 'react';

import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import Loader from './components/Loader';
import Sort from './components/Sort';
import { MESSAGES_URL } from './urls';

import './components/Styles.scss';

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetchMessages();
    //eslint-disable-next-line
  }, [sort]);

  console.log(sort);

  //fetch GET messages from the API, set messages and catch errors
  const fetchMessages = () => {
    fetch(`${MESSAGES_URL}?sort=${sort}`)
      .then(results => results.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };

  //fetch POST message to the API and then fetch GET all messages
  const postMessage = message => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })
      .then(() => fetchMessages())
      .catch(error => console.error(error));
  };

  //fetch POST like to the API's other endpoint and then fetch GET all messages
  const postLike = id => {
    fetch(`${MESSAGES_URL}/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
        <>
          <Sort onClick={event => setSort(event.target.value)} />
          <MessageList messageList={messages} onLikeChange={postLike} />
        </>
      )}
    </main>
  );
};
