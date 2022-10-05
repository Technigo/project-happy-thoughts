import React, { useState, useEffect } from 'react';
import MessageList from 'components/MessageList';
import NewMessage from 'components/NewMessage';

export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = () => {
    setLoading(false);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((result) => result.json())
      .then((json) => setMessageList(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchMessages();
  }, [newMessage]);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
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
      .then((result) => result.json())
      .then(() => fetchMessages())
      .finally(() => setNewMessage(''));
  }

  return (
    <div>
      <NewMessage
        newMessage={newMessage}
        onNewMessageChange={handleNewMessageChange}
        onFormSubmit={onFormSubmit} />
      <MessageList
        loading={loading}
        messageList={messageList}
        setMessageList={setMessageList} />

    </div>
  );
}