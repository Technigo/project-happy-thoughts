import React, { useEffect, useState } from 'react'

import GeneratedFeed from 'components/GeneratedFeed.js';
import PostNewThought from 'components/PostNewThought';
import SiteHeader from 'components/SiteHeader';

const Feed = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [counter, setCounter] = useState(0)
  const [load, setLoad] = useState(false)

  const LIKES_URL = (thoughtId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

  // FETCH API
  const fetchThoughts = () => {
    setLoad(true)
    fetch('//happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => {
        setLoad(false)
        setNewThought('');
        setCounter(0);
      })
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

    fetch('//happy-thoughts-technigo.herokuapp.com/thoughts', options)
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
      {load}
      <div className="feed-wrapper">
        <PostNewThought
          onFeedSubmit={handleFormSubmit}
          newThought={newThought}
          setNewThought={setNewThought}
          counter={counter}
          setCounter={setCounter} />

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