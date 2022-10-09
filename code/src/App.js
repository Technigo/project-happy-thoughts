import React, { useEffect, useState } from 'react';

import ThoughtForm from 'Components/ThoughtForm';
import HappyThoughtList from 'Components/HappyThoughtList'
import Footer from 'Components/Footer';
import Header from './Components/Header'

const LIKES_URL = (thoughtId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThought, setNewThought] = useState('')

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts()
  }, [])

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleFormCleanup = () => {
    setNewThought('')
    setLoading(false)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newThought
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup(false))
  }

  const onLikeIncrese = (thoughtId) => {
    const options = {
      method: 'POST'
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .then(console.log('it works'))
      .finally(() => handleFormCleanup(false))
  }

  return (
    <div className="main">
      <Header />
      <ThoughtForm
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <HappyThoughtList
        loading={loading}
        thoughts={thoughts}
        setThoughts={setThoughts}
        onLikeIncrese={onLikeIncrese} />
      <Footer />
    </div>
  )
}