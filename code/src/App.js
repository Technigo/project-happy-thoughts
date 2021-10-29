import React, { useEffect, useState } from 'react'
import NewThoughts from './components/NewThoughts'
import Thoughts from './components/Thoughts'
import {API_URL} from './utils/urls.js'

export const App = () => {
  const[thoughts, setThoughts] = useState([])
  const[newThought, setNewThought] = useState('')
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setThoughts(data))
    .finally(() => setLoading(false))
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: newThought })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(setNewThought(''))
    .finally(() => fetchThoughts())
  }
  
  const onLikesIncreased = (thought_id) => {
    const options = {
      method: 'POST'
    }
    setLoading(true)

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought_id}/like`, options)
    .then(res => res.json())
    .then(fetchThoughts())
    .finally(() => setLoading(false))
  }

  return (
    <main className="main-container">
      <NewThoughts 
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
        loading={loading}
      />

      <Thoughts 
        thoughts={thoughts}
        onLikesIncreased={onLikesIncreased}
      /> 
    </main>
  )
}

