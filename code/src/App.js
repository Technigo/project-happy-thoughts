import React, { useState, useEffect } from "react"
import { Thought } from "./Thought.js"
import { Form } from "./Form.js"
import { ReactComponent as Heart } from "./heart3.svg"
import "./index.css"

export const App = () => {
  const [APIThoughts, setAPIThoughts] = useState([])

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
        setAPIThoughts(previousThoughts => [newThought, ...previousThoughts])
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
      .then(json => setAPIThoughts(json))
  }, [])

  return (
    <div className='container'>
      <header>
        {" "}
        Happy Thoughts <Heart className='heart' />
      </header>
      <div>
        <Form postThoughtToAPI={postThoughtToAPI} />
      </div>
      <div>
        {APIThoughts.map(oneAPIThought => {
          return (
            <Thought
              key={oneAPIThought._id}
              thoughtInsideComponent={oneAPIThought}
              postLikeToAPI={() => {
                postLikeToAPI(oneAPIThought._id)
                setAPIThoughts(previousThoughts => {
                  oneAPIThought.hearts = oneAPIThought.hearts + 1
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
