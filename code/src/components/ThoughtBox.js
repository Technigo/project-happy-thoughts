import React, { useState } from 'react';
import { API_URL } from 'utils/urls';
import LikeButton from './LikeButton';

const ThoughtBox = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);

  // creates promise
  fetch(API_URL)
    .then((data) => data.json()) // Here we name the info from API and make it json.
    // New name and here we can set the data to a variable.
    .then((transformedData) => setHappyThoughts(transformedData))
  // This happens if error occurs
    .catch((error) => console.log(error))
    .finally(() => console.log({ happyThoughts }));
  // will trigger always at the first time since it has a new value from start.

  return (
    <div className="thoughtBox-div">
      Thought Box
      <div><p>{happyThoughts.message}</p></div>
      <LikeButton />
    </div>
  )
}

export default ThoughtBox