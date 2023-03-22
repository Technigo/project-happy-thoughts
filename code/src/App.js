/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import ThoughtForm from 'components/ThoughtForm'
import ThoughtItem from 'components/ThoughtItem'

const FETCH_API = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  const fetchThoughts = () => {
    fetch(FETCH_API)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }

  useEffect(() => {
    fetchThoughts()
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch(FETCH_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
        setNewThought('')
      })
  }

  const handleLikesIncrease = (thoughtId) => {
    fetch(`${FETCH_API}/${thoughtId}/like`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }

    })
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
      })
  }

  return (
    <main className="main-container">
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought} />

      {thoughts.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease} />
      ))}
    </main>
  )
}