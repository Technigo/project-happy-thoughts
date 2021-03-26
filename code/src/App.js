import React, { useState, useEffect } from 'react'
import moment from 'moment'

import ThoughtForm from './components/ThoughtForm'

import { API_URL, LIKES_URL } from './reusable/urls'


export const App = () => {
  const [thoughtList, setThoughtList] = useState ([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetchThoughtList()
  }, [])

  const fetchThoughtList = () => {
    fetch (API_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtList(thoughts))
      .catch(error => console.error(error))
  }

  // happy thoughts //
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
      .catch(err => console.error(err))
  }

// likes //
  const onLikesIncrease = (id) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      };

      fetch(LIKES_URL(id), options)
        .then(res => res.json())
        .then(receivedThought => {
          const updatedThoughtList = thoughtList.map(thought => {
            if (thought._id === receivedThought._id){
              thought.likes += 1
            }
              return thought
          })
          setThoughtList(updatedThoughtList)
        })
        .catch(err => console.error(err))
  }

  return (
    <>
      < ThoughtForm 
          newThought={newThought}
          onNewThoughtChange={handleNewThoughtChange}
          onSubmitThought={handleSubmitThought}
      />
      {thoughtList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
            <button onClick={() => onLikesIncrease(thought._id)}>
              {thought.hearts}
              ❤️
            </button>
          <p className="time">{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </>
  )
}