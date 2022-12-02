/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
import ThoughtInput from './ThoughtInput'
import ThoughtList from './ThoughtList'

const Overview = ({ _id }) => {
  const [newThought, setNewThought] = useState('');
  const [thoughts, setThoughts] = useState([]);
  const [newName, setNewName] = useState('')

  const API_URL = 'https://project-happy-thoughts-api-wqvqkjwgmq-lz.a.run.app/thoughts'
  const LIKES_URL = `https://project-happy-thoughts-api-wqvqkjwgmq-lz.a.run.app/thoughts/${_id}/like`
  const DELETE_URL = `https://project-happy-thoughts-api-wqvqkjwgmq-lz.a.run.app/thoughts/${_id}`

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

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  };

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
      body: JSON.stringify({ name: newName, message: newThought })
    })
      .then((res) => res.json())
      /* .then((newUserThought) => {
        setNewThought((previousThoughts) => [newUserThought, ...previousThoughts])
      }) */
      .finally(() => {
        setNewThought('')
        setNewName('')
        fetchThoughts()
      })
  }
  const handleLikeIncrease = () => {
    fetch(LIKES_URL, {
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

  const handleThoughtDelete = () => {
    fetch(DELETE_URL, {
      method: 'DELETE',
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
        onNewNameChange={handleNewNameChange}
        newName={newName}
        newThought={newThought} />
      <ThoughtList
        thoughts={thoughts}
        onLikesIncrease={handleLikeIncrease}
        onThoughtDelete={handleThoughtDelete} />
    </>
  )
}

export default Overview