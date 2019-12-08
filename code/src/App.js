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

  const postLikeToAPI = id => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: "POST"
    })
  }

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com")
      .then(res => res.json())
      .then(json => setApiThoughts(json))
  }, [])

  return (
    <div className='container'>
      <div>
        <Form postThoughtToAPI={postThoughtToAPI} />
      </div>
      <div>
        {apiThoughts.map(oneApiThought => {
          return (
            <Thought
              key={oneApiThought._id}
              thoughtInsideComponent={oneApiThought}
              postLikeToAPI={() => {
                postLikeToAPI(oneApiThought._id)
                setApiThoughts(previousThoughts => {
                  oneApiThought.hearts = oneApiThought.hearts + 1
                  return [...previousThoughts]
                })
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
