import React, { useEffect, useState } from 'react';

import ThoughtsFlow from 'components/ThoughtsFlow';
import ThoughtsForm from 'components/ThoughtsForm';

export const App = () => {
  const [thoughtsFlow, setThoughtsFlow] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtsFlow(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleNewThoughtsChange = (event) => {
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

  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST'
    }
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/likes`, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data)
      })
  }

  return (
    <div>
      <ThoughtsForm
        newMessage={newMessage}
        onNewTodoChange={handleNewThoughtsChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtsFlow
        loading={loading}
        thoughtsFlow={thoughtsFlow}
        setThoughtsFlow={setThoughtsFlow} />
    </div>
  )
}