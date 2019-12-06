import React, {useEffect, useState} from 'react'
import { HappyThought } from './HappyThought'
import { HappyForm } from './HappyForm'
import "App.css"


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect (() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
    .then(res => res.json())
    .then(json => setThoughts(json))
  }, [postedMessage])

  const handleFormSubmit = message => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" }
    })
    .then(() => setPostedMessage(message))
    .catch(err => console.log("error:" , err ))
  }

  const onHeartThought = (heartThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === heartThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }
  
  return (
    <div>
      <HappyForm onFormSubmit={handleFormSubmit}/>
      {thoughts.map(thought => (
        <HappyThought key={thought._id} 
        thought={thought}
        onHeartThought={onHeartThought}/>
      ))}
    </div>
  )
}
