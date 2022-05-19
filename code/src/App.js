import React, { useEffect, useState } from 'react'

import ThoughtForm from 'Components/ThoughtForm'
import ThoughtItem from 'Components/ThoughtItem'

const API_URL = 'https://happy-thoughts-level-up.herokuapp.com/thoughts'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
        setNewThought('')
      })
  }

  const handleLikesIncrease = (thoughtId) => {
    fetch(`${API_URL}/${thoughtId}/like`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
      })
  }

  return (
    <main className='main-container'>
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </main>
  )
}
