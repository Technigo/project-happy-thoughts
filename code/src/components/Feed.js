/* eslint-disable */ 
import React, { useEffect, useState } from 'react'
import { formatRelative } from 'date-fns';

import GeneratedFeed from 'components/GeneratedFeed.js';
import InputFeed from 'components/InputFeed';

const Feed = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [counter, setCounterValue] = useState(0)
  const [load, setLoad] = useState(false)

  const LIKES_URL = (thoughtId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

  // FETCH API
  const fetchThoughts = () => {
    setLoad(true)
    fetch('//happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoad(false))
  }

  // UseEffect hook gets all thoughts
  useEffect(() => {
    fetchThoughts()
  }, [])

  // POST-request to the API while submiting the input-form
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch('//happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data)
        setNewThought('')
      })
  }
  // Sending a POST-request for the Likes
  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST'
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data)
      })
      .catch((error) => error)
  }
  return (
    <div className="feed-wrapper">
      {load}
      <InputFeed
        onFeedSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
        counter={counter}
        setCounterValue={setCounterValue} />

      {thoughts.map((thought) => (
        <GeneratedFeed
          key={thought._id}
          thought={thought}
          newThought={newThought}
          onLikesIncrease={handleLikesIncrease} />
      ))}
    </div>
  )
}
export default Feed;