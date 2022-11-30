/* eslint no-underscore-dangle: 0 */
import React, { useEffect, useState } from 'react'

import GeneratedFeed from 'components/GeneratedFeed.js';
import PostNewThought from 'components/PostNewThought';
import SiteHeader from 'components/SiteHeader';

const Feed = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(false)

  const LIKES_URL = (thoughtId) => `https://happythoughts-iwmxwmfrcq-lz.a.run.app/thoughts/${thoughtId}/like`
  
  // FETCH API
  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happythoughts-iwmxwmfrcq-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false))
  }

  // UseEffect hook gets all 20 thoughts
  useEffect(() => {
    fetchThoughts()
  }, [])

  // POST FOR NEW THOUGHT
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch('https://happythoughts-iwmxwmfrcq-lz.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data)
        setNewThought('')
        setCounter(0)
      })
  }

  // POST FOR LIKES
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
    <>
      <SiteHeader />
      <div className="feed-wrapper">
        <PostNewThought
          onFeedSubmit={handleFormSubmit}
          newThought={newThought}
          setNewThought={setNewThought}
          counter={counter}
          setCounter={setCounter} />
        {loading}
        {thoughts.map((thought) => (
          <GeneratedFeed
            key={thought._id}
            thought={thought}
            newThought={newThought}
            onLikesIncrease={handleLikesIncrease} />
        ))}
      </div>
    </>
  )
}
export default Feed;