/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ThoughtList from 'components/ThoughtList';
import ThoughtForm from 'components/ThoughtForm';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('')

  const fetchMessage = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data)
      })
  }
  const sendMessage = (event) => {
    event.preventDefault()
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then((data) => {
        fetchMessage()
      })
  }
  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <ThoughtForm newThought={newThought} setNewThought={setNewThought} onFormSubmit={sendMessage} />
      <ThoughtList thoughts={thoughts} />
    </div>
  );
}