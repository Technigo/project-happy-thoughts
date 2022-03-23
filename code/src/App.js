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
  console.log(thoughts);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ message: newThoughts }),
    })
      .then((res) => res.json())
      .then((newThoughts) => {
        setThoughts((previousThoughts) => [newThoughts, ...previousThoughts]);
      });
  };

  return (
    <div className='main-container'>
      <NewThoughts />
      <RecentThoughts thoughts={thoughts} />
    </div>
  );
};
