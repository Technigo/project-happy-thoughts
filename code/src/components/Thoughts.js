/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import { ThoughtsList } from './ThoughtsList'

export const Thoughts = ({ API_URL }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [thoughtsArray, setThoughtsArray] = useState([]);

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
    <ThoughtsList thoughts={thoughtsArray} loading={isLoading} handleLikes={handleLikes} />
  )
}