import React, { useState, useEffect } from 'react';

import RecentThoughts from './components/RecentThoughts';
import NewThoughts from './components/NewThoughts';

export const App = () => {
  const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [thoughts, setThoughts] = useState([]);
  const [newThoughts, setNewThoughts] = useState('');

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  // remove this later
  // console.log(thoughts);

  const handleNewThoughtsChange = (e) => {
    setNewThoughts(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: newThoughts,
      }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewThoughts(''));
  };

  return (
    <div className='main-container'>
      <NewThoughts
        newThoughts={newThoughts}
        onNewThoughtsChange={handleNewThoughtsChange}
        handleFormSubmit={handleFormSubmit}
      />
      <RecentThoughts thoughts={thoughts} />
    </div>
  );
};
