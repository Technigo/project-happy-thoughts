import React, { useState, useEffect } from 'react';
import ThoughtsForm from 'components/ThoughtsForm';
import Thoughts from 'components/Thoughts';

const API_URL='https://happy-thoughts-technigo.herokuapp.com/thoughts'


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
    .finally(() => setLoading(false));
  }

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: newThought
        })
    }

    fetch(API_URL, options)
        .then(res => res.json())
        .then(() => fetchThoughts())
        .finally(() => setNewThought(''));
  }

  return (
    <div>
      <ThoughtsForm
        newThought={newThought}
        onFormSubmit={onFormSubmit}
        onNewThoughtChange={handleNewThoughtChange}
      />
      <Thoughts
        loading={loading}
        thoughts={thoughts}
      />
    </div>
  )
};

export default Container;
