import React, { useEffect, useState } from 'react'
import ThoughtForm from './components/Thought-Form'
import ThoughtItem from './components/Thought-Item'
import LoadingItem from './components/Loading-Page'

import { API_URL, LIKES_URL } from './utils/APIs'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    fetchThoughts()
  }, [])  //EMPTY ARRAY FOR "useEffect" HOOK TO ENSURE "useEffect" ONLY HAPPEN WHEN THE COMPONENT GETS MOUNTED

  const fetchThoughts = () => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false))  
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = { //MAKES CONST MORE READABLE
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts()
        setNewThought('') //CLEARS INPUT FIELD
      })
  }

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts()
      })
  }

  return (
    <div>
      {loading && <LoadingItem />}
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
      <ThoughtItem
        key={thoughts._id}
        thought={thought}
        onLikesIncrease={handleLikesIncrease}
      />
      ))}
    </div>
  )
}