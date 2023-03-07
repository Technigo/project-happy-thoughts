/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import GetThoughts from './GetThoughts';
import UserInput from './UserInput';

const Main = () => {
  const [getThoughts, setGetThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [newUserName, setNewUserName] = useState('');

  const APIurl = 'https://happy-thoughts-thl7.onrender.com'

  const fetchAPI = () => {
    fetch(APIurl)
      .then((res) => res.json())
      .then((data) => setGetThoughts(data.response))
      .catch((error) => console.error(error))
      .finally(() => console.log('no errors'))
  }

  useEffect(() => {
    fetchAPI()
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleCleanUp = () => {
    setNewThought('')
    fetchAPI()
  }

  const handleOnChangeSubmit = (event) => {
    setNewUserName(event.target.value)
  }

  const handleOnFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought,
        userName: (newUserName.toUpperCase() || 'ANONYMOUS')
      })
    }

    fetch(APIurl, options)
      .then((res) => res.json())
      .then((updatedThought) => {
        setNewThought((previousThoughts) => [updatedThought, ...previousThoughts])
      })
      .finally(() => handleCleanUp())
  }

  const handleLikeButtonOnClick = (_id) => {
    fetch(`https://project-happy-thoughts-api-dxrcv2y6yq-lz.a.run.app/thoughts/${_id}/like`, {
      method: 'PATCH'
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
        newThought={newThought}
        handleOnChangeSubmit={handleOnChangeSubmit} />
      <GetThoughts
        getThoughts={getThoughts}
        handleLikeButtonOnClick={handleLikeButtonOnClick} />
    </>
  )
};
export default Main;

