/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import ThoughtsList from 'components/ThoughtList';
import NewThought from 'components/NewThought';

const likesnumber = (messageID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`;

const Thoughts = () => {
  const [AllThoughts, setAllThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetchThought();
  }, []);

  const fetchThought = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((Response) => Response.json())
      .then((data) => setAllThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const newThoughtChange = (event) => {
    setNewThought(event.target.value)
  }
  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        ' Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThought())
      .finally(() => setNewThought(''));
  }

  const handleLikeChange = (messageID) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(likesnumber(messageID), options)
      .then((res) => res.json())
      .then(console.log('likes counting'))
      .catch((error) => console.error(error))
      .finally(() => fetchThought());
  }

  return (
    <div>
      <NewThought
        newThought={newThought}
        newThoughtChange={newThoughtChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtsList
        AllThoughts={AllThoughts}
        loading={loading}
        handleLikeChange={handleLikeChange} />
    </div>
  )
}

export default Thoughts;