import React, { useState, useEffect } from 'react'

import Thoughts from './components/Thoughts.js';
import Form from './components/Form.js';

export const App = () => {

  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(false);
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  //Get the thoughts from the API
  const fetchThoughts = () => {
    setLoading(true);
    //Old API fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    fetch('https://joanna-project-happy-thoughts.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(thoughts => setThoughts(thoughts))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }
  
  //Post a new thought to the API when clicking the button
  const onFormSubmit = (event) => {
    event.preventDefault();

    fetch('https://joanna-project-happy-thoughts.herokuapp.com/thoughts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    })
      
    .then(res => res.json())
    .then(() => fetchThoughts())
    .finally(() => setNewThought(''));
  };

  //When clicking the heart button post the like to the API for that specifik thought
  const onHeartClick = (thoughtId) => {
    fetch(`https://joanna-project-happy-thoughts.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(() => fetchThoughts())
  };

  return (
    <div className="happy-thoughts-container">
      <Form 
        newThought={newThought} 
        onFormSubmit={onFormSubmit} 
        onNewThoughtChange={handleNewThoughtChange}
      />
      <Thoughts 
        loading={loading}
        thoughts={thoughts} 
        onHeartClick={onHeartClick}
      />
    </div>
  )
}
