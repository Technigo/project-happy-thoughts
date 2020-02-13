import React, { useEffect, useState } from 'react'
import { HappyThought } from './components/HappyThought'
import { HappyForm } from 'components/HappyForm'

const url = "https://happy-thoughts-new-api.herokuapp.com/thoughts"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

useEffect(()=> {
  fetch(url)
    .then(res => res.json())
    .then(json => setThoughts(json))
}, [postedMessage]);

const handleFormSubmit = message => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: { "Content-Type": "application/json" }
  })
    .then(() => setPostedMessage(message))
    .catch(err => console.log("error",err))
}

const onLiked = (thoughtId) => {
  console.log("logging in the app.js", thoughtId)
  const updatedThoughts = thoughts.map(thought => {
    if (thought._id === thoughtId) {
      thought.hearts += 1
    }
    return thought
  })
  setThoughts(updatedThoughts)
} //This function is to make the app know that we clicked on like in the happyThoughts-component.

  return (
    <main>
      <HappyForm onFormSubmit={handleFormSubmit} />
      {thoughts.map(thought => (
        <HappyThought key={thought._id} 
        thought={thought}//komponenten finns inte än
        onLiked={onLiked}/> 
      ))}
    </main>    
  )
}

