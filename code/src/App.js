import React, { useState, useEffect } from 'react';
import { HappyThoughts } from './components/HappyThoughts';
import { Form } from './components/Form';
import './app.css';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then(json => { setThoughts(json) })
      .catch(error => console.error("Error:", error))
  }, [newThought])

  const handleFormSubmit = (message) => {
    setNewThought(message)
  }

  const likedThought = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div className="appContainer">
      <Form handleFormSubmit={handleFormSubmit} />
      <div className="appContainer">
        {thoughts.map(thought => (
          <HappyThoughts
            key={thought._id}
            thought={thought}
            likedThought={likedThought}
          />
        ))}
      </div>
    </div>
  )
}

