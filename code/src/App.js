import React, { useState, useEffect } from 'react'

import Form from './components/Form'
import { API_URL, LIKES_URL } from './utils/API'
import ThoughtCard from './components/ThoughtCard'

export const App = () => {
  const [thought, setThought] = useState([])

  useEffect(() => {
    fetchThoughts()
  })

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThought(data))
  }

  const handleAddedLikes = (id) => {
    const options = {
      method: 'post',
    }
    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
      })
  }

  return (
    <>
      <Form setThought={setThought} thought={thought} />
      {thought.map((thought) => (
        <ThoughtCard
          key={thought._id}
          thought={thought}
          handleAddedLikes={handleAddedLikes}
        />
      ))}
    </>
  )
}
