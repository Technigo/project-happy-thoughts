/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
import { API_URL } from './utils';
import ThoughtInput from './ThoughtInput'
import ThoughtList from './ThoughtList'

const Overview = () => {
  const [newThought, setNewThought] = useState('');
  const [thoughts, setThoughts] = useState([]);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => console.log('All good!'));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then((newUserThought) => {
        setNewThought((previousThoughts) => [newUserThought, ...previousThoughts])
      })
      .finally(() => {
        setNewThought('')
        fetchThoughts()
      })
  }
  const handleLikeIncrease = (_id) => {
    fetch(`https://project-happy-thoughts-api-wqvqkjwgmq-lz.a.run.app/thoughts/${_id}/like`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(() => {
        fetchThoughts();
      })
      .catch((err) => console.error(err))
  };

  return (
    <>
      <ThoughtInput
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={handleFormSubmit}
        newThought={newThought} />
      <ThoughtList
        thoughts={thoughts}
        onLikesIncrease={handleLikeIncrease} />
    </>
  )
}

export default Overview