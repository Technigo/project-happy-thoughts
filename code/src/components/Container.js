import React, { useState, useEffect } from 'react';

import ThoughtsForm from 'components/ThoughtsForm';
import Thoughts from 'components/Thoughts';

const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
const API_URL_LIKES = (thoughtId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`


const Container = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');
 

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setThoughts(data))
    .catch(error => console.error(error))
    .finally(() => setLoading(''));
  };


  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
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
        })
    };

    fetch(API_URL, options)
        .then(res => res.json())
        .then(() => fetchThoughts())
        .finally(() => setNewThought(''));
  };

  const handleNewLikeSubmit = (thoughtId) => {
    const options = {
        method:'POST',
    };
    
    fetch(API_URL_LIKES(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data)
      })
  };

  return (
    <div>
      <ThoughtsForm
        newThought={newThought}
        onFormSubmit={handleFormSubmit}
        onNewThoughtChange={handleNewThoughtChange}
      />
      <Thoughts
        loading={loading}
        thoughts={thoughts}
        onNewLikeSubmit={handleNewLikeSubmit}
      />
    </div>
  )
};

export default Container;
