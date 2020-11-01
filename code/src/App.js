import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Thoughts from './components/Thoughts';
import Footer from './components/Footer';

const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(response => response.json())
      .then(json => {
        const filteredThoughts = json.filter(thought => thought.message);
        const limitedThoughts = filteredThoughts.slice(0, 20);
        setThoughts(limitedThoughts);
      })
      .catch(error => console.error(error));
  };

  const addNewThought = newThought => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    }).then(() => fetchThoughts());
  }

  const onLiked = thoughtId => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div className="container">
      <Header />
      <Thoughts thoughts={thoughts} onLiked={onLiked} addNewThought={addNewThought} />
      <Footer />
    </div>
  )
}
