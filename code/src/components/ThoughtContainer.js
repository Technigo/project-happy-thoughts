import React, { useState, useEffect } from 'react';
import AllThoughts from 'components/AllThoughts';
import NewThought from 'components/NewThought';

const likesnumber = (messageID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`;

const ThoughtContainer = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThought = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughts(transformedData))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThought();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        ' Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((Response) => Response.json())
      .then(() => fetchThought())
      .finally(() => setNewThought(''));
  }

  const newThoughtChange = (event) => {
    event.preventDefault();
    setNewThought(event.target.value)
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
        NewThought={NewThought}
        newThoughtChange={newThoughtChange}
        onSubmit={handleSubmit} />
      <AllThoughts
        thoughts={thoughts}
        loading={loading}
        handleLikeChange={handleLikeChange} />
    </div>
  )
}

export default ThoughtContainer;