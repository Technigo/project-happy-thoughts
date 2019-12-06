import React, { useState, useEffect } from "react"
import { Thought } from "./Thought.js"
import { Form } from "./Form.js"
import "./index.css"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [apiThoughts, setApiThoughts] = useState([])

  const handleFormSubmit = event => {
    event.preventDefault()

    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ message: "Hello world" })
    })
      .then(res => res.json())
      .then(newThought => {
        setThoughts(previousThoughts => [newThought, ...previousThoughts])
      })
  }

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com")
      .then(res => res.json())
      .then(json => setApiThoughts(json))
  })

  return (
    <div>
      <div>
        <Form onSubmit={handleFormSubmit} />
      </div>
      <div>
        {apiThoughts.map(oneApiThought => {
          return (
            <Thought
              key={oneApiThought._id}
              thoughtInsideComponent={oneApiThought}
            />
          )
        })}
      </div>
    </div>
  )
}
