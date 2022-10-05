/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import GetThoughts from './GetThoughts';
import UserInput from './UserInput';

const Main = () => {
  const [getThoughts, setGetThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  const APIurl = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

  const fetchAPI = () => {
    fetch(APIurl)
      .then((res) => res.json())
      .then((data) => setGetThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => console.log('no errors'))
  }

  useEffect(() => {
    fetchAPI()
    const interval = setInterval(() => {
      fetchAPI()
    }, 10000)
    // This line is clearing the interval when user f.ex. changes window or exit app
    return () => clearInterval(interval)
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    fetch(APIurl, {
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
      .finally(() => {
        setNewThought('')
        fetchAPI()
      })
  }

  const handleLikeButtonOnClick = (_id) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then(() => {
        fetchAPI()
      })
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

