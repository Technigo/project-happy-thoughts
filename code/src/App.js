import React, { useEffect, useState } from "react"
import { HappyThought } from "./components/HappyThought"
import { HappyForm } from "./components/HappyForm"

const APIdata = "https://technigo-thoughts.herokuapp.com/"



export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = ('')

  useEffect(() => {
    fetch(APIdata)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const handleFormSubmit = message => {
    fetch(APIdata, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
    .then(() => setPostedMessage(message))
    .catch(err => console.log("error:", err))
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
    <div>
      <HappyForm onFormSubmit={handleFormSubmit} />
      {thoughts.map(thought => (
        <HappyThought key={thought._id} thought={thought} onLiked={onLiked} />
      ))}
    </div>
  )
}
