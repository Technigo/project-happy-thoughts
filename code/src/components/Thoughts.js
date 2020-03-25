import React, { useState, useEffect } from 'react'
import { ThoughtsList } from './ThoughtsList'
import { NewThoughtForm } from './NewThoughtForm'
import './thoughts.css'

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch happy thoughts from API using GET
  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        setThoughts(json)
        setLoading(false)
      })
  }, [])

  // Mapping through the array of thoughts
  // Adding one heart if the id is the same as the id for the heart clicked 
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
          setThoughts={setThoughts} />

        {loading && <p className="loading-thoughts">Loading happy thoughts...</p>}

        <ThoughtsList
          thoughts={thoughts}
          onHeartClicked={onHeartClicked} />
      </section>
    </div>
  )
}