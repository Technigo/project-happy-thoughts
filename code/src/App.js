import React, { useState, useEffect } from 'react'
import { HappyThought } from "./components/HappyThought.js"
import { HappyForm } from "./components/HappyForm.js"
import "./app.css"

const thoughtsUrl = 'https://project-happy-api.herokuapp.com/'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect(() => {
    fetch(thoughtsUrl)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const handleFormSubmit = message => {
    fetch(thoughtsUrl, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-type": "application/json" }
    })
      .then(() => setPostedMessage(message))
  }

  const onLiked = (thoughtId) => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div className="content">
      <HappyForm onFormSubmit={handleFormSubmit} />
      {thoughts.map(thought => (
        <HappyThought key={thought._id} thought={thought} onLiked={onLiked} />
      ))}
    </div>
  )
}

