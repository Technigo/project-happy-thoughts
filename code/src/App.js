import React, { useEffect, useState } from 'react'
import { HappyThought } from "./Components/HappyThought"
import { HappyForm } from "./Components/HappyForm"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState([])

  const handleFormSubmit = (message) => {
    fetch("https://technigo-thoughts.herokuapp.com", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "content-type": "application/json" }
    })
      .then(() => setPostedMessage(message))
  }

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])
  return (
    <div>
      <HappyForm onFormSubmit={handleFormSubmit} />
      {thoughts.map(thought => (
        <HappyThought key={thought._id} thought={thought} />
      ))}
    </div >

  )
}
