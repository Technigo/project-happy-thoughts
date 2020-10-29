import React, { useState, useEffect } from 'react';

import { ThoughtsList } from './ThoughtsList';
import { SendThought } from './SendThought';
import { THOUGHTS_URL } from './urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(data => setThoughts(data));
  };

  const reachThoughtInput = (newThought) => {
    fetch(THOUGHTS_URL, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
     }).then(() => fetchThoughts());
  };

  return (
    <main className="main-container">
      <SendThought onThoughtChange={reachThoughtInput} />
      <ThoughtsList thoughtsList={thoughts} />
    </main>
  );
};
