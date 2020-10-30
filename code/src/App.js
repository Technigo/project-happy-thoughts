import React, { useState, useEffect } from 'react';

import { ThoughtsList } from './ThoughtsList';
import { ThoughtsForm } from './ThoughtsForm';
import { THOUGHTS_URL } from './urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  //const [likes, setLikes] = useState(0);

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

  const onLiked = (thoughtId) => {

    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  };

  return (
    <main className="main-container">
      <ThoughtsForm onThoughtChange={reachThoughtInput} />
      {thoughts.map(thought => (
        <ThoughtsList 
          key={thought._id} 
          thoughtsList={thoughts} 
          onLiked={onLiked}
          hearts={thought.hearts} 
          _id={thought._id} 
        />
      ))}
      
    </main>
  );
};
