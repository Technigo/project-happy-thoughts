import React, { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { Card } from 'components/Card';

const MESSAGES_URL = ('https://app-happy-thought.herokuapp.com/thoughts')

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [myPost, setMyPost] = useState('')

  useEffect(() => {

    fetch(MESSAGES_URL)
      .then(res => res.json())
      .then(json => setThoughts(json)
      )
  }, [myPost])

  const handleFormSubmit = message => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setMyPost(message))
      .catch(err => console.log("error:", err))
  }

  const onLiked = thoughtId => {
    console.log('Logging in the APP.js', thoughtId)

    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1 
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <main>
      <Form onFormSubmit={handleFormSubmit} />
      {thoughts.map(thought => (
        <Card key={thought._id} thought={thought} onLiked={onLiked} />
      ))}
    </main>
  )

} 