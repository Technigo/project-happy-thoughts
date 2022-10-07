import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import AllThoughts from 'components/AllThoughts';
import NewThought from 'components/NewThought';

export const App = () => {
  const [thought, setThought] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThought = () => {
    setLoading(true);
    fetch('https://week7-backend.herokuapp.com/tasks')
      .then((res) => res.json())
      .then((data) => setThought(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThought();
  }, []);

  const onThoughtSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        ' Content-Type': 'application/json'
      },
      body: JSON.stringify({ description: newThought })
    }

    fetch('https://week7-backend.herokuapp.com/tasks', options)
      .then((res) => res.json())
      .then(() => fetchThought())
      .finally(() => setNewThought(''));
  }

  const newThoughtChange = (event) => {
    event.preventDefaults();
    setThought(event.target.value);
  }

  const handleLikeCounter = (messageID) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

  return (
    <div>
      <Header />
      <NewThought
        newThought={newThought}
        onThoughtSubmit={onThoughtSubmit}
        onChange={newThoughtChange}/>
      <AllThoughts
        loading={loading}
        thought={thought}
        handlelikeCounter={handlelikeCounter} />
    </div>
  )
  }