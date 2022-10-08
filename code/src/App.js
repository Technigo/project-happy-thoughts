/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import MessageList from 'components/MessageList';
import NewMessage from 'components/NewMessage';

export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [newLike, setNewLike] = useState(false)
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const fetchMessages = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((result) => result.json())
      .then((json) => setMessageList(json))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
        setNewLike(false)
      })
  }

  useEffect(() => {
    // Restricts that the fetchMessages will only run when the newLike or loading
    // is set to true, otherwise it runs twice for every change.
    if (newLike === true || loading === true) {
      fetchMessages();
    }
  }, [newLike, loading]);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
    setCount(event.target.value.length)
  }

  // Function that adds the users message to the database.
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
      .catch((error) => console.error(error))
      .finally(() => setNewMessage(''));
  }

  if (loading) {
    setInterval(fetchMessages, 5 * 60 * 1000);
    return (
      <p>Loading in progress...</p>
    )
  }

  return (
    <div className="outer-wrapper">
      <NewMessage
        newMessage={newMessage}
        onNewMessageChange={handleNewMessageChange}
        onFormSubmit={onFormSubmit}
        count={count} />
      <MessageList
        setNewLike={setNewLike}
        loading={loading}
        setLoading={setLoading}
        messageList={messageList}
        setMessageList={setMessageList} />
    </div>
  );
}