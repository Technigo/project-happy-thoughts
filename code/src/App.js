/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import ThoughtForm from 'components/ThoughtForm'
import ThoughtItem from 'components/ThoughtItem'
import Spinner from 'components/Spinner'

const FETCH_API = 'https://project-happy-thoughts-api-6nzr46lxka-uc.a.run.app/thoughts'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('')

  const fetchThoughts = () => {
    setLoading(true)
    fetch(FETCH_API)
      .then((res) => res.json())
      .then((data) => setThoughts(data.response))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThoughts()
  }, [])

  // const handleFormCleanup = () => {
  //   setNewThought('')
  //   setLoading(false)
  // }
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

  // const handleLikesIncrease = (thoughtId) => {
  //   fetch(`${FETCH_API}/${thoughtId}/like`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     }

  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       fetchThoughts()
  //         .finally(() => handleFormCleanup())
  //     })
  // }
  if (loading) {
    return <Spinner />
  }

  return (
    <main className="main-container">
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought} />

      {thoughts.map((thought) => (
        <ThoughtItem
          loading={loading}
          key={thought._id}
          thought={thought}
          thoughtId={thought._id} />
      ))}
    </main>
  )
}