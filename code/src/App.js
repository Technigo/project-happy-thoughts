import React, { useEffect, useState } from 'react'

import { API_URL, API_LIKES_URL } from './utilities/Api'

import ThoughtForm from 'components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

export const App = () => {

  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThought, setNewThought] = useState('')
  const [counter, setCounter] = useState(0)


  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
        .then(res => res.json())
        .then(data => setThoughtList(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
  }

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
    setCounter(event.target.value.length)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "message": newThought
        })
    }

    fetch(API_URL, options)
        .then(res => res.json())
        .then(() => {
          fetchThoughts()
          setNewThought('')
          setCounter(0)
          })
    

  }

  const handleLikesIncrease = (singleThoughtId) => {
    const options = {
      method: 'POST'
    }

    fetch(API_LIKES_URL(singleThoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data)
      })
  }

  
  return (
    <div className="main-container">
      <ThoughtForm 
        newThought={newThought} 
        setNewThought={setNewThought}
        onNewThoughtChange={handleNewThoughtChange} 
        onFormSubmit={onFormSubmit} 
        counter={counter}
      />
      <ThoughtList 
        loading={loading} 
        thoughtList={thoughtList}
        handleLikesIncrease={handleLikesIncrease}
      />
    </div>
  )

}
