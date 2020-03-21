import React, { useState, useEffect } from 'react'
import { ThoughtCard } from './ThoughtCard'

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

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
    <div>
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
    </div>
  )
}