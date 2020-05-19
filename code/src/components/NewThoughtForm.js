import React, { useState } from 'react'
import { Name } from './Name'
import { NewThought } from './NewThought'
import './newthoughtform.css'

export const NewThoughtForm = ({ setThoughts }) => {
  const [newThought, setNewThought] = useState('')
  const [name, setName] = useState('')

  // Function determining what is happening when form i submitted 
  const handleThoughtFormSubmit = (event) => {
    event.preventDefault()

    const jBody = JSON.stringify({ message: newThought, createdBy: name }, (key, value) => {
      if (value) {
        return value
      } else {
        return undefined
      }
    })

    // Post new messages to API using POST
    fetch("https://fridamaria-happy-api.herokuapp.com/thoughts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jBody
    })
      .then((res) => res.json())
      .then((newThought) => {
        // Adds new thought to array without having to fetch again
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        // Clears textarea input field
        setNewThought('')
        setName('')
      })
  }

  return (
    <article className="thought-form-wrapper">
      <form className="thought-form" onSubmit={handleThoughtFormSubmit}>
        <div className="new-thought-container">
          <Name
            value={name}
            onChange={(event) => setName(event.target.value)} />
          <NewThought
            value={newThought}
            onChange={(event) => setNewThought(event.target.value)}
            newThought={newThought} />
        </div>


        <button className="thought-button" type="submit" disabled={newThought.length < 5 ? true : false}>
          Post <span className="heart-emoji" role="img" aria-label="love letter">💌</span>
        </button>
      </form>
    </article>
  )
}