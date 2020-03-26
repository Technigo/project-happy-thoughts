import React, { useEffect, useState } from 'react'
import { HappyFeed } from './HappyFeed'
import { HappyMessage } from './HappyMessage'
import './App.css'

const url = 'https://technigo-thoughts.herokuapp.com/'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  const onLiked = thoughtId => {
    
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <main>
      <HappyMessage onFormSubmit={onFormSubmit} />
      {thoughts.map(thought => (
        <HappyFeed key={thought._id} thought={thought} onLiked={onLiked} />
      ))}
    </main>
  )
}
