import React, { useState, useEffect } from 'react'
import { PostedThought } from './components/PostedThought'
import './App.css'
import { NewThought } from './components/NewThought'


export const App = () => {
  const [postedThought, setPostedThought] = useState([])
  const [newPostedThought, setNewPostedThought] = useState('')

  useEffect(() => {
    fetch('https://happy-thoughts-matilda.herokuapp.com/', { method: 'GET' })
      .then(res => res.json())
      .then(json => setPostedThought(json))
  }, [newPostedThought])

  const handleFormSubmit = ({ newThought, name }) => {
    const jsonBody = JSON.stringify({ message: newThought, name }, (key, value) => {
      if (value) {
        return value
      }
      return undefined
    })
    fetch('https://happy-thoughts-matilda.herokuapp.com/', {
      method: 'POST',
      body: jsonBody,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setNewPostedThought(newThought))
      .catch(err => {
        console.log("some terribel error:", err)
        throw err;
      })

  }

  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = postedThought.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setPostedThought(updatedThoughts)
  }

  return (
    <div>
      <NewThought
        onFormSubmit={handleFormSubmit}
      />
      {postedThought.map((thought) => (
        <PostedThought
          key={thought._id}
          _id={thought._id}
          message={thought.message}
          hearts={thought.hearts}
          createdAt={thought.createdAt}
          onThoughtLiked={onThoughtLiked}
          name={thought.name}
        />
      ))
      }

      <p>Technigo Bootcamp 2019 - Matilda Arvidsson</p>
    </div>
  )
}
