import React, { useState, useEffect } from 'react'

import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

import { API_URL, LIKES_URL } from './reusable/urls'


export const App = () => {
  const [thoughtList, setThoughtList] = useState ([])
  const [newThought, setNewThought] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchThoughtList()
  }, [])

  const fetchThoughtList = () => {
    fetch (API_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtList(thoughts))
      .catch(error => setError(error))
  }

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  const handleSubmitThought = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    };

    fetch(API_URL, options)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('something went wrong')
        }
      })
      // .then(receivedNewThought => setThoughtList([receivedNewThought, ...thoughtList]))
      .then(() => fetchThoughtList())     
      .catch(error => {setError(error)})
      .finally(() => setNewThought(''))
  }

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
  };

  fetch(LIKES_URL(thoughtId), (options))
    .then(response => response.json())
    // .then(receivedThought => {
    //   const updatedThoughtList = thoughtList.map(thought => {
    //     if (thought._id === receivedThought._id){
    //     thought.hearts += 1
    //   }
    //     return thought
    //   })
    //   setThoughtList(updatedThoughtList)
    // })
    .then(() => fetchThoughtList())     
    .catch(error => setError(error))
  }

  return (
    <main className="maincontainer">
        {error && <p>Something went wrong. Sorry about that.</p>}
        < ThoughtForm
            newThought={newThought}
            onNewThoughtChange={handleNewThoughtChange}
            onSubmitThought={handleSubmitThought}
        />
        < ThoughtList 
            thoughtList={thoughtList}
            handleLikesIncrease={handleLikesIncrease}
        />
    </main>
  )
}