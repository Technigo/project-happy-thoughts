/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';

import { ThoughtsForm } from './ThoughtsForm';
import { ThoughtsList } from './ThoughtsList';
import { LoadingPage } from './LoadingPage';

const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';

export const ThoughtsPage = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((data) => data.json())
      .then((transformedData) => setThoughts(transformedData))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  // useEffect with empty array [] call your functions on application start
  useEffect(() => {
    fetchThoughts();
  }, []);

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);

    console.log(event);
  };

  // This code empties the form
  const handleFormCleanup = () => {
    setNewThought('');
    setLoading(false);
  };

  const onThoughtPost = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newThought,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    setLoading(true);
    fetch(API_URL, options)
      .then((data) => data.json())
      .then(() => fetchThoughts())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup());
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="main-container">
      <ThoughtsForm
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange}
        onThoughtPost={onThoughtPost}
      />
      <ThoughtsList thoughts={thoughts} fetchThoughts={fetchThoughts} />
    </div>
  );
};
