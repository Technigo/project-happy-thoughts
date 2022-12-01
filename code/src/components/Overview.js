/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
/* import { API_URL, LIKES_URL } from './utils'; */
import ThoughtInput from './ThoughtInput'
import ThoughtList from './ThoughtList'

const Overview = () => {
  const [newThought, setNewThought] = useState('');
  const [thoughts, setThoughts] = useState([]);

  const APIurl = 'https://project-happy-thoughts-api-wqvqkjwgmq-lz.a.run.app/thoughts'

  /* const APIurl = 'https://happy-thoughts-technigo.herokuapp.com/thoughts' */

  const fetchThoughts = () => {
    fetch(APIurl)
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
    fetch(APIurl, {
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
    fetch(`https://project-happy-thoughts-api-wqvqkjwgmq-lz.a.run.app/thoughts/${_id}/like`, /* LIKES_URL(id), `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like` */ {
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