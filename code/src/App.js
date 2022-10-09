import React, { useEffect, useState } from 'react';

import ThoughtForm from 'Components/ThoughtForm';
import HappyThoughtList from 'Components/HappyThoughtList'
import Footer from 'Components/Footer';
import Header from './Components/Header'

const LIKES_URL = (thoughtId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(false)
  const [newMessage, setNewMessage] = useState('')

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

  const handleNewThoughtsChange = (event) => {
    event.preventDefault()
    setNewMessage(event.target.value)
  }

  const handleFormCleanup = () => {
    setNewMessage('')
    setLoading(false)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newMessage
      })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewMessage(''))
  }

  const onLikeIncrese = (thoughtId) => {
    const options = {
      method: 'POST'
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .then(console.log('it works'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts)
      .finally(() => handleFormCleanup(false))
  }

  return (
    <div className="main">
      <Header />
      <ThoughtForm
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleNewThoughtsChange={handleNewThoughtsChange}
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