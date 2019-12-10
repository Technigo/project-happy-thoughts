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
  }, [postedMessage]) //Adding the new message from form to the array of thouhgts without new fetch

  // Passing the message from form to postedMessage via function addedThought
  const addedThought = message => {
    setPostedMessage(message)
  }

  // To add likes to API and show the updated thoughts with new likes (callback function)
  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  // Passing consts to the components to use them there with props (anyname={the real name on what to pass on})
  return (
    <main>
      <NewThoughtForm addedThought={addedThought} />
      <ListThoughts
        thoughts={thoughts}
        onThoughtLiked={onThoughtLiked} />
    </main>
  )
}