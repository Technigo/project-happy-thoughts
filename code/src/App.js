/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Header from 'components/Header'
import NewThoughts from 'components/NewThoughts'
import Thoughtlist from 'components/Thoughtlist';

export const App = () => {
  const [newThoughts, setNewThoughts] = useState('')
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json)
      .then((data) => setNewThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => { setLoading(false); setNewThoughts('') })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      headers: {
        'Content-type': 'aplication/json'
      },
      body: JSON.stringify({ message: newThoughts })
    })
      .then((response) => response.json())
      .then(() => {
        fetchData()
        setNewThoughts('')
      })
  }

  const handleLikeIncrease = (thoughtsId) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtsId}/like`, {
      method: 'POST',
      headers: {
        'Content-type': 'aplication/json'
      }
    })
      .then((response) => response.json())
      .then(() => {
        fetchData()
      })
  }

  return (
    <div className="outerWrapper">
      <div className="innerWrapper">
        <Header />
        <Thoughtlist
          handleFormSubmit={handleFormSubmit}
          newThoughts={newThoughts}
          thoughts={setThoughts} />

        {thoughts.map((thought) => (
          <NewThoughts
            key={thought._id}
            thought={thought}
            loading={loading}
            onLikeIncrease={handleLikeIncrease} />
        ))}
      </div>
    </div>
  )
}