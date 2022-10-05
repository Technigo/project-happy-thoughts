import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/urls';
import LikeButton from './LikeButton';

const ThoughtBox = () => {
  const [allThoughts, setAllThoughts] = useState([])

  // This fetches all the data from the API
  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((transformedData) => setAllThoughts(transformedData))
      .catch((error) => console.log(error))
      .finally(() => console.log({ allThoughts }))
  });

  // This returns a div for each message in the API-array.
  return (
    allThoughts.map((thought) => (
      <div className="thoughtBox-div">
        <p>{thought.message}</p>
        <p>{thought.createdAt}</p>
        <p>Likes: {thought.hearts}</p>
        <LikeButton />
      </div>)));
};

export default ThoughtBox