import React, { useState, useEffect } from 'react';
import { MessageDisplay } from './components/MessageDisplay'
import { PostMessage } from './components/PostMessage'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const fetchMessages = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((result) => result.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value)
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: newMessage
    })
  }

  fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
    .then((result) => result.json())
    .then(() => fetchMessages())
    .finally(() => setNewMessage(''))

  return (
    <div>
      <MessageDisplay
        loading={loading}
        messageList={messageList}
        setMessageList={setMessageList} />
      <PostMessage
        newMessage={newMessage}
        onFormSubmit={onFormSubmit}
        handleNewMessage={handleNewMessage} />
    </div>
  );
}
