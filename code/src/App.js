import React, { useState, useEffect } from 'react';
import { ThoughtsCard } from 'components/ThoughtsCard';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(response => response.json())
      .then(json => setThoughts(json))
  });

  return (
    <>
      {thoughts.map((thought) => (
        <ThoughtsCard key={thought.id} message={thought.message} />
      ))}
    </>
  )
};