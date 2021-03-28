import React, { useState, useEffect } from 'react'

import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

import { API_URL, LIKES_URL } from './reusable/urls'


export const App = () => {
  const [thoughtList, setThoughtList] = useState ([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetchThoughtList()
  }, [])

  const fetchThoughtList = () => {
    fetch (API_URL)
      .then(response => response.json())
      .then(thoughts => setThoughtList(thoughts))
      .catch(error => console.error(error))
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
      .then(response => response.json())
      .then(receivedNewThought => setThoughtList([receivedNewThought, ...thoughtList]))
  //  .then(() => fetchThoughtList)     
      .catch(error => console.error(error))
      setNewThought('')
  }

  const handleLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
  };

  fetch(LIKES_URL(id), options)
    .then(response => response.json())
    .then(receivedThought => {
      const updatedThoughtList = thoughtList.map(thought => {
        if (thought._id === receivedThought._id){
        thought.hearts += 1
      }
        return thought
      })
      setThoughtList(updatedThoughtList)
    })
//  .then(() => fetchThoughtList)     
    .catch(error => console.error(error))
  }

  return (
    <main className="maincontainer">
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