import React, { useEffect, useState } from 'react';

import { ThoughtsFlow } from 'components/ThoughtsFlow';
import { ThoughtsForm } from 'components/ThoughtsForm';

const LIKES_URL = (LikeID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${LikeID}/like`

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleNewThoughtsChange = (event) => {
    setNewMessage(event.target.value)
  }

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://project-happy-thoughts-api-7irwn4hbpa-lz.a.run.app/thoughts')
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
  const onLikesIncrease = (LikeID) => {
    const options = { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      } }

    fetch(LIKES_URL(LikeID), options)
      .then((res) => res.json())
      .then(console.log('yey it works.'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts())
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
        onLikesIncrease={onLikesIncrease} />
    </div>
  )
}