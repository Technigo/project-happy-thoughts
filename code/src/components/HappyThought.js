import React, { useState, useEffect } from 'react';

import { API_URL, LIKES_URL } from '../utils/urls';

import Header from './Header';
import FormInput from './FormInput';
import ThoughtsList from './ThoughtsList';
import Loader from './Loader';

const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false));
  };

  const handleThoughtsChange = (event) => {
    setNewThought(event.target.value);
  };

  const handleFormSubmit = (event) => {
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
      .then(() => {
        fetchThoughts(setNewThought(''));
      });
  };

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then(() => {
        fetchThoughts();
      });
  };

  return (
    <div className='thoughts-container'>
      {loading && <Loader />}
      <Header />
      <FormInput
        newThought={newThought}
        onThoughtsChange={handleThoughtsChange}
        onFormSubmit={handleFormSubmit}
      />
      <ThoughtsList thoughts={thoughts} onLikesIncrease={handleLikesIncrease} />
    </div>
  );
};

export default HappyThoughts;
