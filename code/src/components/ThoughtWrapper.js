import React, { useState, useEffect } from 'react';
import ThoughtsList from './ThoughtsList';
import NewThoughts from './NewThoughts';

const LIKES_URL = (messageID) =>
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`;

const ThoughtWrapper = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');
  const [input, setInput] = useState('');

  const fetchThought = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughts(transformedData))
      .catch((error) => console.error(error))
      .then(console.log('everything works', thoughts))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThought();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThought())
      .finally(() => setNewThought(''));
  };

  const newThoughtChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    setNewThought(event.target.value);
  };

  const handleLikeCounter = (messageID) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(LIKES_URL(messageID), options)
      .then((res) => res.json())
      .then(console.log('likes work'))
      .catch((error) => console.error(error))
      .finally(() => fetchThought());
  };

  return (
    <>
      <NewThoughts
        newThought={newThought}
        handleSubmit={handleSubmit}
        newThoughtChange={newThoughtChange}
        input={input}
      />
      <ThoughtsList
        thoughts={thoughts}
        loading={loading}
        handleLikeCounter={handleLikeCounter}
      />
    </>
  );
};

export default ThoughtWrapper;
