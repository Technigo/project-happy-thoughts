import React, { useState, useEffect } from "react"
import { Thought } from "./Thought.js"
import { Form } from "./Form.js"
import "./index.css"

export const App = () => {
  const [apiThoughts, setApiThoughts] = useState([])

  const postThoughtToAPI = message => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(newThought => {
        setApiThoughts(previousThoughts => [newThought, ...previousThoughts])
      })
  }

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com")
      .then(res => res.json())
      .then(json => setApiThoughts(json))
  }, [])

  return (
    <div>
      <div>
        <Form postThoughtToAPI={postThoughtToAPI} />
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
