import React, { useState, useEffect } from 'react';

import "./index.css"
import { ThoughtsInput } from "./components/js/ThoughtsInput";
import { ThoughtsFeed } from "./components/js/ThoughtsFeed";
import { THOUGHTS_URL } from "./components/js/urls";


export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();  
  }, []);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
      .catch(error => console.error(error));
  }

  const reachThoughtsInput = (newThoughts) => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ message: newThoughts })
    })
    .then(() => fetchThoughts())
    .catch(error => console.error(error));
  }

  const onLiked = thoughtId => {
    console.log("Logging it", thoughtId)
    const likedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      } 
    return thought
    })
    setThoughts(likedThoughts);
  }

  return (
    <main>
      <ThoughtsInput onThoughtsChange={reachThoughtsInput} />
      {thoughts.map(thought => (
      <ThoughtsFeed id={thought._id} heart={thought.hearts} thought= {thought} thoughtsFeed={thoughts} key={thought._id} onLiked={onLiked} />
      ))}
    </main>
  )
}
