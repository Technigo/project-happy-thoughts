import React, { useEffect, useState } from 'react'
import { API_URL, LIKES_URL } from './utils/urls'
import ThoughtForm from 'components/ThoughtForm'
import ThoughtItem from 'components/ThoughtItem'
import LoadingSpinner from 'components/LoadingSpinner'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false))
  }

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    }

    fetch(LIKES_URL(thoughtId), options)
      .then(res => res.json())
      .then(() => {
        fetchThoughts()
      })
  }

  return (
    <div className="thought-form-container">
      {loading && <LoadingSpinner />}

      <ThoughtForm
        thoughts={thoughts}
        newThought={newThought}
        setNewThought={setNewThought}
        setThoughts={setThoughts}
      />

      {thoughts.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease} />
      ))}
    </div>
  )
}
