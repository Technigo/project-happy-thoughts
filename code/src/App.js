/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import Header from 'components/Header'
import NewThoughts from 'components/NewThoughts'
import Thoughtlist from 'components/Thoughtlist'

export const App = () => {
  const [newThoughts, setNewThoughts] = useState('')
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json)
      .then((data) => setNewThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => { setLoading(false); setNewThoughts('') })
  }

  useEffect(() => {
    fetchThoughts()
  }, [])

  const handleNewThought = (event) => {
    event.preventDefault()
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      headers: {
        'Content-type': 'aplication/json'
      },
      body: JSON.stringify({ message: newThoughts })
    })
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
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
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
      })
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <Header />
        <Thoughtlist
          handleFormSubmit={handleFormSubmit}
          newThoughts={newThoughts}
          handleNewThought={handleNewThought} />

        {thoughts.map((thought) => <NewThoughts
          thoughts={thoughts}
          key={thought._id}
          setThoughts={setThoughts}
          loading={loading}
          onLikeIncrease={handleLikeIncrease} />)}
      </div>
    </div>
  )
}