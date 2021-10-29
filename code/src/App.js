import React, { useState, useEffect } from 'react'

import ThoughtForm from 'componenets/ThoughtForm'
import ThoughtList from 'componenets/ThoughtList'
import Loader from 'componenets/Loader'

import { API_URL, API_URL_HEARTS } from './utils/urls'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [count, setCount] = useState(0); //for counting characters used in textarea
  const [loading, setLoading] = useState(false)

  useEffect (() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    setLoading(true) //loading overlay on while fetching
    fetch(API_URL) //fetching the API
    .then((res) => res.json())
    .then((data) => setThoughts(data))
    .finally(() => setLoading(false)) //stopped fetching, loading overlay off
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data)
      })
      setNewThought("") //clears form
      setCount(0) //resets counter
  }

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    }

    fetch(API_URL_HEARTS(thoughtId), options)
    .then((res) => res.json())
    .then((data) => {
      fetchThoughts()
    })

  }

  return (
    <div>
      {loading && <Loader />}
      <ThoughtForm 
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
        count={count}
        setCount={setCount}
      />

      {thoughts.map((thought) => (
        <ThoughtList
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  )
}
