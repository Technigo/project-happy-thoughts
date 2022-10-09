import React, { useState, useEffect } from 'react';

import MessageList from 'components/MessageList';
import MessageForm from 'components/MessageForm';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const fetchMessages = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleFormCleanup = () => {
    setNewMessage('');
    setLoading(false);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newMessage
      })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchMessages())
      .finally(() => handleFormCleanup());
  }

  const handleLikes = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, options)
      .then((res) => res.json())
      .then(() => fetchMessages())
      .finally(() => setNewMessage());
  }

  return (
    <div className="outerWrapper">
      <div className="innerWrapper">
        <MessageForm
          newMessage={newMessage}
          onNewMessageChange={handleNewMessageChange}
          onFormSubmit={onFormSubmit} />
        <MessageList
          loading={loading}
          messageList={messageList}
          setMessageList={setMessageList}
          handleLikes={handleLikes} />
      </div>
    </div>
  )
}
