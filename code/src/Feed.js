/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { SendThoughtForm } from 'SendThoughtForm';
import { Thought } from 'Thought';

export const Feed = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThought, setNewThought] = useState('')

  const fetchThoughts = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }

  useEffect(() => {
    setLoading(true);
    setInterval(fetchThoughts(), 10)
    // Thoughts are refreshed at intervals so that it mimics a real feed update
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    })
      .then(() => fetchThoughts())
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <SendThoughtForm
        onNewThoughtChange={(event) => {
          setNewThought(event.target.value)
        }}
        handleFormSubmit={handleFormSubmit} />

      {!loading && thoughtsList.map((thought) => {
        const handleLikeSubmit = () => {
          fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, {
            method: 'POST'
          })
            .then(() => fetchThoughts())
            .catch((error) => console.log(error))
        }
        return (
          <Thought
            key={thought._id}
            thoughtMessage={thought.message}
            timeStamp={thought.createdAt}
            handleLikeSubmit={handleLikeSubmit}
            likesCounter={thought.hearts} />
        )
      })}
      {loading && (<h2>Loading happy thoughts...</h2>)}
    </div>
  );
}