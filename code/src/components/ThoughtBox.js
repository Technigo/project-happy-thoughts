/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/urls';
import LikeButton from './LikeButton';

const ThoughtBox = () => {
  const [allThoughts, setAllThoughts] = useState([])

  // This fetches all the data from the API
  const getHappyThoughts = () => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((transformedData) => setAllThoughts(transformedData))
      .catch((error) => console.log(error))
      .finally(() => console.log('no errors'))
  };

  useEffect(() => {
    getHappyThoughts();
  }, []);

  // This returns a div for each message in the API-array.
  return (
    allThoughts.map((thought) => (
      <div className="thoughtBox-div" key={thought._id}>
        <p>{thought.message}</p>
        <p>{thought.createdAt}</p>
        <p>Likes: {thought.hearts}</p>
        <LikeButton getHappyThoughts={getHappyThoughts} thought={thought} />
      </div>)));
};

export default ThoughtBox