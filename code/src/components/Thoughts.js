import React, { useState, useEffect } from 'react'
import { ListThoughts } from './ListThoughts'
import { NewThoughtForm } from './NewThoughtForm'

// THOUGHTS - FETCHING FROM API AND RETURNING COMPONENTS FORM AND LIST OF THOUGHTS
export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])

  // Fetching the API and listing the json in setThoughts
  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  // To add the NewThought in the array of thoughts without fetching again
  const addedThought = (newThought) => {
    setThoughts((previousThoughts) => [newThought, ...previousThoughts])
  }

  // To add likes
  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div>
      <NewThoughtForm addedThought={addedThought} />
      <ListThoughts
        thoughts={thoughts}
        onThoughtLiked={onThoughtLiked} />
    </div>
  )
}