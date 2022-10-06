import React, { useState, useEffect } from 'react';

import ThoughtsForm from 'components/ThoughtsForm';
import Thoughts from 'components/Thoughts';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://api-happy-tweets.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data.response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(''));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    };

    fetch('https://api-happy-tweets.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewThought(''));
  };

  const handleNewLikeSubmit = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`https://api-happy-tweets.herokuapp.com/thoughts/${_id}/like`, options)
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-underscore-dangle
        fetchThoughts(data.response._id)
      })
  };

  return (
    <div>
      <ThoughtsForm
        newThought={newThought}
        onFormSubmit={handleFormSubmit}
        onNewThoughtChange={handleNewThoughtChange} />
      <Thoughts
        loading={loading}
        thoughts={thoughts}
        onNewLikeSubmit={handleNewLikeSubmit} />
    </div>
  )
};