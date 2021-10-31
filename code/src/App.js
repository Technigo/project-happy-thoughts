import React, { useState, useEffect } from 'react';

import NewThoughtInput from './Components/NewThoughtInput';
import GetThought from './Components/GetThoughts';
import LoadingItem from './Components/LoadingItem';
import Header from './Components/Header';

import { API_URL, LIKES_URL } from './utils/urls';

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
  // Function to handle onChange-event for NewThoughtInput
  const handleNewThoughtChange = (event) => {
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
      .then((data) => {
        fetchThoughts();
      });
    setNewThought('');
  };

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <div className="app__wrapper">
      <Header />
      {loading && <LoadingItem />}
      <NewThoughtInput
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
      />
      {thoughts.map((thought) => (
        <GetThought
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  );
};
