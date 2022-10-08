/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';
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

  // This parts makes sure the fetch is only done once in the beginning and
  // then every other 30 sek, to not overload the API.
  useEffect(() => {
    getHappyThoughts();
    const interval = setInterval(() => {
      getHappyThoughts()
    }, 20000)
    return () => clearInterval(interval)
  }, []);

  // This returns a div for each message in the API-array. Every message is called a thought here.
  return (
    allThoughts.map((thought) => (
      <div className="thoughtBox-div" key={thought._id}>
        <p>{thought.message}</p>
        {/* This updates the date-format to "X minutes" ago.  */}
        <p>{formatDistance(new Date(thought.createdAt), new Date())} ago</p>
        <div className="like-div">
          <LikeButton getHappyThoughts={getHappyThoughts} thought={thought} hearts={thought.hearts} />
          <p>x {thought.hearts}
          </p>
        </div>
      </div>)));
};

export default ThoughtBox