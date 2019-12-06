import React, { useState, useEffect } from 'react'
import { HappyThought } from './components/HappyThought'
import { HappyForm } from './components/HappyForm'
import './app.css'

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([])
  const [sentThought, setSentThought] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com")
      .then(res => res.json())
      .then(json => setHappyThoughts(json))
  }, [sentThought])

  const sendHappyThought = (message) => {
    setSentThought(message)
  }

  const onLiked = thoughtId => {
    console.log("Logging in the APP.js", thoughtId)
    // just to check that the func is being called and has the id

    const updatedThoughts = happyThoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setHappyThoughts(updatedThoughts)
  }

  return (
    <main>
      <HappyForm onFormSubmit={sendHappyThought} />
      {happyThoughts.map(happyThought => (
        <HappyThought key={happyThought._id} happyThought={happyThought} onLiked={onLiked} />
      ))}
    </main>
  )
}
