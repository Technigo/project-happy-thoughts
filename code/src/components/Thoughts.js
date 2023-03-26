/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';

import { ThoughtsList } from './ThoughtsList'
import { ThoughtsForm } from './ThoughtsForm'

export const Thoughts = ({ API_URL }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [thoughtsArray, setThoughtsArray] = useState([]);
  const [newThought, setNewThought] = useState('');

  const fetchHappyThoughts = () => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughtsArray(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchHappyThoughts();
  }, [])

  /* eslint-disable no-unused-vars */
  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  const handleFormCleanup = () => {
    setNewThought('');
    setIsLoading(false);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchHappyThoughts())
      .finally(() => handleFormCleanup());
  }

  const handleLikes = (thoughtId) => {
    fetch(`${API_URL}/${thoughtId}/like`, { method: 'POST' })
      .then((response) => response.json())
      .then((data) => {
        const updatedLikes = thoughtsArray.map((thought) => {
          if (thought._id === data._id) {
            thought.hearts += 1;
            return thought;
          } else {
            return thought;
          }
        });
        setThoughtsArray(updatedLikes);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="thoughts-container">
      <div className="form-container">
        <ThoughtsForm newThought={newThought} setNewThought={setNewThought} onFormSubmit={onFormSubmit} />
      </div>
      <ThoughtsList thoughts={thoughtsArray} loading={isLoading} handleLikes={handleLikes} />
    </div>
  )
}