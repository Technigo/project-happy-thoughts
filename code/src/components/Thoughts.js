import React, { useState, useEffect } from 'react'
import { ListThoughts } from './ListThoughts'
import { NewThoughtForm } from './NewThoughtForm'

// THOUGHTS - FETCHING FROM API AND RETURNING COMPONENTS FORM AND LIST OF THOUGHTS
export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("") //"Fake state" needed to refetch the array with new thought


  // Fetching the API and listing the json in setThoughts
  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  // Passing the addedThought from form to postedMessage
  const addedThought = message => {
    setPostedMessage(message)
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
    <main>
      <NewThoughtForm addedThought={addedThought} />
      <ListThoughts
        key={thoughts._id}
        thoughts={thoughts}
        onThoughtLiked={onThoughtLiked} />
    </main>
  )
}