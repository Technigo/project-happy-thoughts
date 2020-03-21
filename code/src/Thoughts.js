import React, { useState, useEffect } from 'react'
import { ThoughtCard } from './ThoughtCard'

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div>
      {thoughts.map(thought => (
        <ThoughtCard
          key={thought._id}
          happyThought={thought.message}
          hearts={thought.hearts}
          createdAt={thought.createdAt}
        />
      ))}
    </div>
  )
}