import React, { useEffect, useState } from 'react'

import { API_URL, LIKES_URL } from './utils/commons'

import ThoughtForm from './components/ThoughtForm';
import ThoughtsItem from './components/ThoughtsItem';

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then((data) => setThoughts(data))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought})
    }

    fetch(API_URL, options)
      .then((res) => res.json()
      .then((data) => {
        fetchThoughts()
      }))
      
      // v1
      // setThoughts([data, ...thoughts])))
      
      setNewThought('')
  }

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json()
      .then((data) => {
        fetchThoughts()
      }))
      
  }

  return (
    <div>
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <ThoughtsItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  )
}
