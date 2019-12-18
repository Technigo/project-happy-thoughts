import React, { useEffect, useState } from 'react'
import { HappyThought } from './HappyThought'
import { HappyForm } from './HappyForm'
import './happyForm.css'
import './happyThought.css'


export const App = () => {
  const [happyT, setHappyT] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setHappyT(json))
  }, [postedMessage])

  const handleFormSubmit = (message) => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setPostedMessage(message))
  }


  return (
    <div>
      <HappyForm onFormSubmit={handleFormSubmit} />
      {happyT.map(thought => (
        <HappyThought key={thought._id}
          thought={thought}
        />
      ))}
    </div>
  )
}
