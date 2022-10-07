/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

import ThoughtCard from 'components/ThoughtCard';
import SubmitForm from 'components/SubmitForm';

const Parent = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
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

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewThought(''));
  }

  const onThoughtLikeChange = (_id) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, option) // _id is the key in API
      .then((res) => res.json())
      .then(() => fetchThoughts()) // update the data, hence redoing the fetchThought
  }

  return (
    <div>
      <SubmitForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtCard
        loading={loading}
        thoughts={thoughts}
        setThoughts={setThoughts}
        onThoughtLikeChange={onThoughtLikeChange} />
    </div>
  );
}

export default Parent;