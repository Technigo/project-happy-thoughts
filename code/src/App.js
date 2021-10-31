import React, { useEffect, useState } from 'react';

// components
import ThoughtCard from 'components/ThoughtCard';
import Form from './components/Form';

import { API_URL } from './utils/urls';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]); // empty array
  const [newThought, setNewThought] = useState('');

  const handleNewThoughtChange = (e) => setNewThought(e.target.value);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchThoughtList();
  }, []);

  const fetchThoughtList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((thoughts) => setThoughtsList(thoughts));
  };

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
      .then((data) => setThoughtsList([data, ...thoughtsList]));
    setNewThought('');
  };

  return (
    <div>
      <Form
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        handleNewThoughtChange={handleNewThoughtChange}
      />
      <ThoughtCard thoughtsList={thoughtsList} />
    </div>
  );
};
