import React, { useEffect, useState } from 'react';

import ThoughtForm from 'Components/ThoughtForm';
import HappyThoughtList from 'Components/HappyThoughtList'
import Footer from 'Components/Footer';
import Header from './Components/Header'

const LIKES_URL = (LikeID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${LikeID}/like`

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(false)
  const [newMessage, setNewMessage] = useState('')

  const handleNewThoughtsChange = (event) => {
    setNewMessage(event.target.value)
  }

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

  const onLikeIncrese = (LikeID) => {
    const options = { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      } }

    fetch(LIKES_URL(LikeID), options)
      .then((res) => res.json())
      .then(console.log('it works'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts)
  }

  return (
    <div>
      <Header />
      <ThoughtForm
        newMessage={newMessage}
        handleNewThoughtsChange={handleNewThoughtsChange}
        onFormSubmit={onFormSubmit} />
      <HappyThoughtList
        loading={loading}
        thoughts={thoughts}
        onLikeIncrese={onLikeIncrese} />
      <Footer />
    </div>
  )
}