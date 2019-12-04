import React, { useState, useEffect } from "react"
import { Thought } from "./Thought.js"
import "./index.css"

export const App = () => {
  const [apiThoughts, setApiThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com")
      .then(res => res.json())
      .then(json => setApiThoughts(json))
  })

  return (
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
  )
}
