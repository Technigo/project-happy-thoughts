import React, { useEffect, useState } from 'react'

import ThoughtsList from './components/ThoughtsList'
import NewThought from './components/NewThought'
import Loading from 'components/Loading'
import Header from 'components/Header'

import { API_URL, API_LIKES_URL } from './utils/urls'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState(false)

useEffect (() => {
  fetchThoughts()
}, [])

const fetchThoughts = () => {
  setLoading(true)
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setThoughts(data))
    .finally(() => setLoading(false))
}

const onFormSubmit = (event) => {
  event.preventDefault()

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: newThought })
  } 

  fetch(API_URL, options)
  .then(res => res.json())
  .then((data) => setThoughts([data, ...thoughts]))
  
    // fetchThoughts()
}

const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    }

    fetch(API_LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts()
      })
  }


return (
  <section>
    <Header />
    {loading && <Loading />}
    <NewThought 
     onFormSubmit={onFormSubmit}
     newThought={newThought}
     setNewThought={setNewThought}
    />
   
    {thoughts.map((thought) => (
      <ThoughtsList 
     thought={thought}
     handleLikesIncrease={handleLikesIncrease}
    />
    ))}
  </section>
  )
}
