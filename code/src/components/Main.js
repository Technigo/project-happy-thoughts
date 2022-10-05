/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import GetThoughts from './GetThoughts';
import UserInput from './UserInput';

const Main = () => {
  const [getThoughts, setGetThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setGetThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine'))
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then((updatedThought) => {
        setNewThought((previousThoughts) => [updatedThought, ...previousThoughts])
      })
      .finally(() => setNewThought(''))
  }

  const handleLikeButtonOnClick = (_id) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <>
      <UserInput
        handleNewThoughtChange={handleNewThoughtChange}
        handleOnFormSubmit={handleOnFormSubmit}
        newThought={newThought} />
      <GetThoughts
        getThoughts={getThoughts}
        handleLikeButtonOnClick={handleLikeButtonOnClick} />
    </>
  )
};
export default Main;

