import React, { useState, useEffect } from 'react'
import { HappyThought } from './HappyThought'
import { HappyForm } from './HappyForm'
import './app.css'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch("https://project-happy-thoughts.herokuapp.com/thoughts")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const handleFormSubmit = (message) => {
    fetch("https://project-happy-thoughts.herokuapp.com/thoughts", {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setPostedMessage(message))
    setPostedMessage('')
  }

  const onLikedThought = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div className="appContainer">
      <HappyForm onFormSubmit={handleFormSubmit} />
      {thoughts.map(thought => (
        <HappyThought
          key={thought._id}
          thought={thought}
          onLikedThought={onLikedThought} />
      ))}
    </div>
  )
}
