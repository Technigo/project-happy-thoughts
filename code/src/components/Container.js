/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import Thoughts from 'components/Thoughts';
import ThoughtsForm from 'components/ThoughtsForm';

const Container = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

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
  };

  const onNewLikeSubmit = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, options)
      .then((res) => res.json())
      .then(console.log('yey it works.'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts())
  }

  return (
    <div>
      <ThoughtsForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <Thoughts
        loading={loading}
        thoughts={thoughts}
        onNewLikeSubmit={onNewLikeSubmit} />
    </div>
  );
}

export default Container;