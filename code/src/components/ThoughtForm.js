import React, { useState, useEffect } from 'react'
import '../components/thoughtform.css'

export const ThoughtForm = (props) => {
  const [thoughts, setThoughts] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    props.onSubmit(thoughts)
    setThoughts("")
  }

  return (
    <article className="thoughtForm">
      <p className="thoughtText">Whats making you happy right now?</p>

      <form >
        <lable>
          <textarea 
          type="text"
          name="happyToughtsInput"
          placeholder="Write something nice here!"
          rows="3" 
          cols="63"
          maxLength="140"
          onChange = {(event) => setThoughts(event.target.value)} 
          />
        </lable>
        <div className="thoughtBox">
        <span className="sendThoughtButton" onClick={handleSubmit}>❤️Send Happy Thought❤️</span>
        <span className="sendThoughtInfo">
          {thoughts.length}/140
        </span>
        </div>
      </form>

    </article>
  )
}