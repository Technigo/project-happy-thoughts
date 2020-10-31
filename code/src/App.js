import React, { useState, useEffect } from 'react';

import { ThoughtsList } from 'components/ThoughtsList';
import { ThoughtForm } from 'components/ThoughtForm';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { ThoughtsUrl } from 'Urls';

export const App = () => {

  const [thoughts, setThoughts] = useState([]);
  
  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(ThoughtsUrl)
      .then(results => results.json())
      .then(data => setThoughts(data))    
  }
    
    const postThoughts = (newThought) => {
      fetch(ThoughtsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ message: newThought })
     })
      .then(() => fetchThoughts())
    }

  const updateLikes = (thoughtId) => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1;
      }
      return thought;
    })
    setThoughts(updatedThoughts)
  }

  const onLike = (thoughtId) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: ''
    }).then(() => updateLikes(thoughtId))
  }
  
  return (
    <main className="main">
      <Header />
      <div className='thoughts-container'>
      <ThoughtForm onThoughtChange={postThoughts}/>
        {thoughts.map(thought => (
          <ThoughtsList key={thought._id} thought={thought} onLike={onLike}/>
        ))}
      </div>
      <Footer />
    </main>
  );
}; 