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
    fetch('https://project-happy-thoughts-api-afgzgbi3gq-lz.a.run.app/thoughts')
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

  /* SUBMITTING NEW THOUGHT  */
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

    fetch('https://project-happy-thoughts-api-afgzgbi3gq-lz.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewThought(''));
  };

  /* ADDING LIKES TO THOUGHTS  */
  /* const onNewLikeSubmit = (_id) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/${_id}/like`, options)
      .then((res) => res.json())
      .then(console.log('yey it works.'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts())
  } */

  const onNewLikeSubmit = (_id) => {
    fetch(`https://project-happy-thoughts-api-afgzgbi3gq-lz.a.run.app/thoughts/${_id}/like`, {
      method: 'PATCH'
    })
      .then((res) => res.json())
      .then(console.log('yey it works.'))
      .then(() => fetchThoughts())
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