/* eslint-disabled */

import React, { useState, useEffect } from 'react';
import SendThought from './components/SendThought';
import MessageList from './components/MessageList';

const API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = () => {
    setLoading(false);
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchMessages();
  }, [newMessage]);

  const onNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const onNewMessageSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newMessage
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }

    fetch(API, options)
      .then((res) => res.json())
      .then(() => fetchMessages())
      .finally(() => setNewMessage(''))
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">

        <SendThought
          newMessage={newMessage}
          onNewMessageChange={onNewMessageChange}
          onNewMessageSubmit={onNewMessageSubmit} />

        <MessageList
          loading={loading}
          messageList={messageList}
          setMessageList={setMessageList} />

      </div>
    </div>

  );
}

