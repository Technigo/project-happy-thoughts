/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import MessageList from 'components/MessageList';
import NewThoughts from 'components/NewThoughts';
import './index.css';

export const App = () => {
  const [newThoughts, setNewThoughts] = useState('');
  const [newLike, setNewLike] = useState(false)
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // useEffect is triggered on restart, newLike and loading
  useEffect(() => {
    // Restricts that the fetchMessages will only run when the newLike or loading
    // is set to true, otherwise it runs twice for every change.
    fetchMessages();
  }, [newLike]);

  // Function that calls the messages from the database
  const fetchMessages = () => {
    setLoading(false)
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => {
        setNewLike(false)
      })
  }

  // Function that handles the user-input so the text is shown when the user types it
  // and that the character-count is updating in real time
  const handleNewThought = (event) => {
    setNewThoughts(event.target.value)
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
        message: newThoughts
      })
    }
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((result) => result.json())
      .then((data) => fetchMessages(data.response))
      .catch((error) => console.error(error))
      .finally(() => setNewThoughts(''));
  }

  if (loading) {
    return (
      <p>Loading in progress...</p>
    )
  }

  return (
    <div className="content-container">
      <NewThoughts
        newThoughts={newThoughts}
        loading={loading}
        onNewThoughtChange={handleNewThought}
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