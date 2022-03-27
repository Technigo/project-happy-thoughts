import React, { useState, useEffect } from 'react';

import ThoughtForm from './ThoughtForm';
import ThoughtItems from './ThoughtItems';

import { API_URL, LIKES_URL } from 'utils/urls';

const Wrapper = () => {
  const [newThought, setNewThought] = useState('');
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
      
  };
  
  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      }),
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
        setNewThought('');
      });
  };

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    };
    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data.response);
      });
  };


  return (

    <div>

      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
        onNewThoughtChange={handleNewThoughtChange}
      />

      {thoughts.map((thought) => (
        <ThoughtItems
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))};
    </div>

  );
};

export default Wrapper;