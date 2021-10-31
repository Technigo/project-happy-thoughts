import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL , LIKES_URL } from 'utils/urls'; //importing API-URLS
import NewThought from './NewThought'; // importing NewThought component that has form to post thoughts
import Thoughts from './Thoughts'; // importing NewThought component that displays thoughts
import Loader from './Loader'; //importing Loader component that displayed while fetching data from server

const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([]); // for displaying thoughts
  const [newThought, setNewThought] = useState(''); // for sending new thought
  const [loading, setLoading] = useState(false); // for loader

  //for GET API request
  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally (()=> setLoading(false));
  };

  // for setting the new thought
  const handleInputChange = (event) => {
    setNewThought(event.target.value);
  };

  //for POST
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => fetchThoughts())
      .then(() => setNewThought(''));
  };
  // for like a thought
  const handleLikeAThought = (thoughtId) => {
    
    fetch(LIKES_URL(thoughtId), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => fetchThoughts());
  };

  //for mounting and rendering the components Thought and NewThought
  return (
    <>
      <NewThought
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        onInputChange={handleInputChange}
      />
      {loading && <Loader />}

      {thoughts.map((thought) => (
        <Thoughts
          key={thought._id}
          message={thought.message}
          date={moment(thought.createdAt).fromNow()}
          hearts={thought.hearts}
          _id={thought._id}
          onLikeAThought={handleLikeAThought}
        />
      ))}
    </>
  );
};

export default HappyThoughts;
