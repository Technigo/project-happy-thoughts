import React, { useEffect, useState } from 'react';
import ThoughtsInput from 'Components/ThoughtsInput';
import ThoughtsList from 'Components/ThoughtsList';
import { API_URL, LIKES_URL } from './utils/urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
        setNewThought('');
      });
  };

  const handleLikeIncrease = (thoughtId) => {
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
    <section className='mainContainer'>
      <h1>Share your happy thoughts!</h1>
      <ThoughtsInput
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <ThoughtsList
          key={thought._id}
          thought={thought}
          onLikeIncrease={handleLikeIncrease}
        />
      ))}
    </section>
  );
};
