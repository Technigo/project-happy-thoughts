import React, { useEffect, useState } from 'react';

import HappyHeader from 'components/HappyHeader';
import HappyForm from 'components/HappyForm';
import HappyHeart from 'components/HappyHeart';
import HappyLoading from 'components/HappyLoading';

import { API_URL, HEART_URL } from './API/url';

export const App = () => {
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
      .then((data) => {
        fetchThoughts();
      });
    setNewThought('');
  };

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    };

    fetch(HEART_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <div className="bigWrapper">
      {loading && <HappyLoading />}
      <HappyHeader />
      <HappyForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <HappyHeart
          key={thought._id}
          thought={thought}
          onLikesIncreased={handleLikesIncrease}
        />
      ))}
    </div>
  );
};
