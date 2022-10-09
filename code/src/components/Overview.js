/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';

import ThoughtInput from './ThoughtInput'
import ThoughtList from './ThoughtList'

const Overview = () => {
  const [newThought, setNewThought] = useState('');
  const [thoughts, setThoughts] = useState([]);

  const APIurl = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

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
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then(() => {
        fetchThoughts();
      });
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