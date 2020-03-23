import React, { useState } from 'react'
import { NewThought } from './NewThought'
import './newthoughtform.css'

export const NewThoughtForm = ({ setThoughts }) => {
  const [newThought, setNewThought] = useState('')

  // Function determining what is happening when form i submitted 
  const handleThoughtFormSubmit = (event) => {
    event.preventDefault()

    // Post new messages to API using POST
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]) // Adds new thought to array without having to fetch again
        setNewThought('') // Clears textarea input field
      })
  }

  return (
    <article className="thought-form-wrapper">
      <form className="thought-form" onSubmit={handleThoughtFormSubmit}>
        <div className="new-thought-container">
          <NewThought
            value={newThought}
            onChange={(event) => setNewThought(event.target.value)} />
        </div>
        <button className="thougt-button" type="submit">
          <span className="heart-emoji" role="img" aria-label="red heart">❤️</span> Send Happy Thought <span className="heart-emoji" role="img" aria-label="red heart">❤️</span>
        </button>
      </form>
    </article>
  )
}