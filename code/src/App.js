import React, { useEffect, useState } from 'react';

import { ThoughtsFlow } from 'components/ThoughtsFlow';
import { ThoughtsForm } from 'components/ThoughtsForm';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleNewThoughtsChange = (event) => {
    setNewMessage(event.target.value)
  }

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

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
      .then(() => fetchThoughts())
      .finally(() => setNewMessage(''));
  }

  

  return (
    <div>
      <ThoughtsForm
        newMessage={newMessage}
        handleNewThoughtsChange={handleNewThoughtsChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtsFlow
        loading={loading}
        thoughts={thoughts}
        setNewMessage={setNewMessage} />
    </div>
  )
}