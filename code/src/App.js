import React, { useEffect, useState } from 'react';

// components
import ThoughtCard from 'components/ThoughtCard';
import Form from './components/Form';

import { API_URL, LIKES_URL } from './utils/urls';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]); // empty array
  const [newThought, setNewThought] = useState('');

  const handleNewThoughtChange = (e) => setNewThought(e.target.value);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchThoughtList();
  }, []);

  //   fetching API
  const fetchThoughtList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((thoughts) => setThoughtsList(thoughts))
      .catch((err) => console.error(err));
  };

  //   form submitted
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then(() => fetchThoughtList())
      .catch((err) => console.error(err));
    setNewThought('');
  };

  //   send POST request when thought is liked
  const handleLikedThoughts = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then(() => {
        fetchThoughtList();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Form
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        handleNewThoughtChange={handleNewThoughtChange}
      />
      <ThoughtCard
        thoughtsList={thoughtsList}
        handleLikedThoughts={handleLikedThoughts}
      />
    </div>
  );
};
