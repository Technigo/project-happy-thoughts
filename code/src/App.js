import React, { useEffect, useState } from 'react';
import { NewThoughtsForm } from 'components/NewThought';
import { Thoughts } from 'components/Thoughts';

export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((json) => setThoughts(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleNewThoughtChange = (event) => {
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
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewMessage(''));
  }
  const onNewHeartSubmit = (_id) => {
    const options = { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      } }

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, options)
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts())
  }

  return (
    <div>
      <NewThoughtsForm
        newMessage={newMessage}
        handleNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <Thoughts
        loading={loading}
        thoughts={thoughts}
        onNewHeartSubmit={onNewHeartSubmit} />
    </div>
  )
}