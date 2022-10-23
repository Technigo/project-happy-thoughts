/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import ThoughtsList from 'components/ThoughtList';
import NewThought from 'components/NewThought';

const likesnumber = (LikeID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${LikeID}/like`;

const Thoughts = () => {
  const [allThoughts, setAllThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThought = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setAllThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThought();
  }, []);

  const newThoughtChange = (event) => {
    setNewThought(event.target.value)
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThought())
      .finally(() => setNewThought(''))
  }

  const onThoughtChange = (LikeID) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(likesnumber(LikeID), options)
      .then((res) => res.json())
      .then(console.log('likes counting'))
      .catch((error) => console.error(error))
      .finally(() => fetchThought());
  };

  return (
    <div className="thought-container">
      <NewThought
        newThought={newThought}
        newThoughtChange={newThoughtChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtsList
        allThoughts={allThoughts}
        loading={loading}
        onThoughtChange={onThoughtChange} />
    </div>
  )
}

export default Thoughts;