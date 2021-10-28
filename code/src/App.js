import React, { useEffect, useState } from 'react'

import ThoughtForm from './components/ThoughtForm'
import ThoughtItem from './components/ThoughtItem'
import Loading from './components/Loading'

import { API_URL, API_LIKES } from './utils/urls'

// Setting up state

export const App = () => {
  const [thoughts, setThoughts] = useState([]) 
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading]  = useState(false)


  // Mount app

  useEffect(() => {
    fetchThoughts()
  }, [])

  // Where loading-animation starts

  const fetchThoughts = () => {
    setLoading(true)
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setThoughts(data))
    .finally(() => setLoading(false))

    // Where loading ends (Page finished loading and thoughts are shown)
  }


  // Handles new thoughts 

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought }),
    }
    event.target.reset()

    fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => {
    fetchThoughts()
    })

    // Clears input-field and let's you post a new thought
    setNewThought()
  }


  // Handles new likes

    const handleLikesIncrease = (thoughtId) => {
      const options = {
        method: 'POST',
      }

      fetch(
        API_LIKES(thoughtId), 
        options
      )
      .then((res) => res.json())
      .then((data) => {
      fetchThoughts()
      })
    }

  return (
    <main>
      <div className="content-wrapper"> 
        {loading && <Loading />}
        <ThoughtForm 
          onFormSubmit={handleFormSubmit}
          newThought={newThought}
          setNewThought={setNewThought}
        />
      {thoughts.map((thought) => (
        <ThoughtItem
        key={thought._id} 
        thought={thought}
        onLikesIncrease={handleLikesIncrease}/>
  ))}
      </div>
    </main>
  )
}