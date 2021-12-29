import React, { useState, useEffect } from 'react'

import LoadingItem from './components/Loading'
import ThoughtForm from './components/ThoughtForm'
import ThoughtItem from './components/ThoughtItem'

import { API_URL, LIKES_URL } from 'utils/urls'

export const App = () => {

  const [thoughts, setThoughts] = useState([ { 
    message: 'Hello',
    createdAt: '2021-11-01',
    hearts: 0,
    _id: 'abc123'
  } ])
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState('false')

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    setLoading(true)
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setThoughts(data))
      .finally(() => setLoading(false))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault() //stops the submit from refreshing the page

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch(API_URL, options)
      .then(response => response.json())
      .then(data => 
        //v1 - better for more objects (local state)
        //setThoughts([data, ...thoughts])
        //v2 - better for fewer objects (server fetch)
        fetchThoughts()
        )
  }

  const handleLikesIncrease = (thoughtId) => {

    const options = { method: 'POST', }

    fetch(LIKES_URL(thoughtId), options)
      .then((response) => response.json())
      .then((data) => {
        //v1 - better fore more items (local state)
        // const updatedThoughts = thoughts.map((item) => {
        //   if (item._id === data._id) {
        //     item.hearts += 1
        //     return item
        //   } else {
        //     return item
        //   }
        // })
        // setThoughts(updatedThoughts)
        //v2 - better for fewer objects (server fetch)
        fetchThoughts()
      })
  }

  return (
    <>
    {loading && <LoadingItem />}
    
    <div className="feed-wrapper">
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
    </>
  )

}