/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ThoughtList from 'components/ThoughtList';
import ThoughtForm from 'components/ThoughtForm';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('')

  const fetchMessage = () => {
    fetch('https://project-happy-thoughts-api-eihxehjbzq-lz.a.run.app/thoughts', {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data)
      }).catch((error) => console.log(error))
  }
  const sendMessage = (event) => {
    event.preventDefault()
    fetch('https://project-happy-thoughts-api-eihxehjbzq-lz.a.run.app/thoughts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    })
      .then(() => setNewThought(''))
      .catch((error) => console.log(error))
  }

  const sendLike = (_id) => {
    fetch(`https://project-happy-thoughts-api-eihxehjbzq-lz.a.run.app/thoughts/${_id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchMessage();
  });

  return (
    <div className="content">
      <ThoughtForm newThought={newThought} setNewThought={setNewThought} onFormSubmit={sendMessage} />
      <ThoughtList thoughts={thoughts} sendLike={sendLike} />
    </div>
  );
}
