import React, { useState, useEffect } from 'react'
import { ThoughtsList } from './ThoughtsList'
import { NewThoughtForm } from './NewThoughtForm'
import './thoughts.css'

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  // Fetch happy thoughts from API using GET
  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  // Function determining what is happening when form i submitted 
  const handleThoughtFormSubmit = (event) => {
    event.preventDefault()

    // Post new messages to API using POST
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]) // Adds new thought to array without having to fetch again
        setNewThought('') // Clears textarea input field
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
        <ThoughtsList
          thoughts={thoughts}
          onHeartClicked={onHeartClicked} />
      </section>
    </div>
  )
}