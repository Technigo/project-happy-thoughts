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
    fetch("https://technigo-thoughts.herokuapp.com", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setSentThought(message))
  }

  return (
    <main>
      <HappyForm onFormSubmit={sendHappyThought} />
      {happyThoughts.map(happyThought => (
        <HappyThought key={happyThought._id} happyThought={happyThought} />
      ))}
    </main>
  )
}
