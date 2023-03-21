/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { SendThoughtForm } from 'SendThoughtForm';
import { Thought } from 'Thought';

export const Feed = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThought, setNewThought] = useState('')

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }

  useEffect(() => {
    fetchThoughts()
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({ message: newThought })
    })
      .then((response) => response.json())
      .then((newThoughtInput) => {
        setNewThought((previousThoughts) => [newThoughtInput, ...previousThoughts])
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <SendThoughtForm
        onNewThoughtChange={(event) => {
          setNewThought(event.target.value)
        }}
        handleFormSubmit={handleFormSubmit()} />
      <h1>Somethingsomething title here</h1>
      {!loading && thoughtsList.map((thought) => {
        console.log('each thought', thought)
        return (
          <Thought
            key={thought._id}
            thoughtMessage={thought.message}
            timeStamp={thought.createdAt} />
        )
      })}
      {loading && (<h2>Loading happy thoughts...</h2>)}
    </div>
  );
}