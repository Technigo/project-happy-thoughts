
import React, { useState, useEffect } from 'react';
import ThoughtGenerator from 'components/ThoughtGenerator'
import PostThought from 'components/PostThought'

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const LIKES_URL = (thoughtId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

  // FETCH API
  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughts(transformedData))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  // USE EFFECT TO GET ALL 20 THOUGHTS
  useEffect(() => {
    fetchThoughts()
  }, []);

  // TO POST NEW THOUGHT

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleFormCleanup = () => {
    setNewThought('')
    setLoading(false)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newThought
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then(() => fetchThoughts())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup(false))
  }

  if (loading) {
    return (
      <p>The page is loading</p>
    )
  }

  // POST FOR LIKES
  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST'
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((data) => data.json())
      .then(() => fetchThoughts())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup(false))
  }

  return (
    <>
      <h1>❤️ Happy thoughts ❤️ </h1>
      <div className="Container">
        <PostThought
          newThought={newThought}
          onNewThoughtChange={onNewThoughtChange}
          onFormSubmit={onFormSubmit} />
        <ThoughtGenerator
          loading={loading}
          thoughts={thoughts}
          setThoughts={setThoughts}
          onLikesIncrease={handleLikesIncrease} />
      </div>
    </>
  );
}

