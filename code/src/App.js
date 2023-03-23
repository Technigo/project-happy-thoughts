/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import Header from 'components/Header'
import NewThoughts from 'components/NewThoughts'
import ThoughtList from 'components/Thoughtlist'

export const App = () => {
  const [newThoughts, setNewThoughts] = useState('')
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)

  const handleNewThoughts = (event) => {
    setNewThoughts(event.target.value);
  }

  const fetchData = () => {
    setLoading(true)
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => { setLoading(false); setThoughtList('') })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'aplication/json'
      },
      body: JSON.stringify({ message: newThoughts })
    }

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchData())
      .finally(() => setNewThoughts(''))
  }

  const handleLikeIncrease = (thoughtId) => {
    const options = { method: 'POST',
      headers: {
        'Content-type': 'aplication/json'
      } }

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, options)
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .finally(() => fetchData())
  }

  return (
    <div>

      <Header />
      <NewThoughts
        handleFormSubmit={handleFormSubmit}
        handleNewThoughts={handleNewThoughts}
        newThoughts={newThoughts} />

      <ThoughtList
        thoughtList={thoughtList}
        setThoughtList={setThoughtList}
        loading={loading}
        onLikeIncrease={handleLikeIncrease} />
    </div>

  )
}