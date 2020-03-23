import React, { useState, useEffect } from 'react'
import { ThoughtCard } from './ThoughtCard'
import { NewThoughtForm } from './NewThoughtForm'
import './thoughts.css'

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  const handleThoughtFormSubmit = (event) => {
    event.preventDefault()

    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        setNewThought('')
      })
  }

  const onHeartClicked = (thoughtId) => {
    const heartClicked = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(heartClicked)
  }

  return (
    <div className="thoughts-wrapper">
      <section className="thoughts-container">
        <NewThoughtForm
          onSubmit={handleThoughtFormSubmit}
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)} />
        {thoughts.map(thought => (
          <ThoughtCard
            key={thought._id}
            happyThought={thought.message}
            id={thought._id}
            onHeartClicked={onHeartClicked}
            hearts={thought.hearts}
            createdAt={thought.createdAt}
          />
        ))}
      </section>
    </div>
  )
}