import React, { useEffect, useState } from 'react'
import moment from 'moment'
import SubmitButton from "./SubmitButton";
import { API_URL } from 'utils/urls'
import Emoji from 'utils/Emoji'

export const NewThought = () => {
const [thoughts, setThoughts] = useState([])
const [newThought, setNewThought] = useState([])

  useEffect (() => {
fetch(API_URL)
.then(res => res.json())
.then((data) => setThoughts(data))
}, [])

const onFormSubmit = (event) => {
  event.preventDefault()

  const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    } 

  fetch(API_URL, options)
  .then(res => res.json())
  .then((data) => setThoughts([data, ...thoughts]))
}

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What is making you happy right now?</label>
        <textarea
        id="newThought"
        type="text" 
        name="Text"
        rows="4"
        cols="50"
        spellCheck="true"
        required
        placeholder="Write a happy thought here..."
        value={newThought} 
        onChange={event => setNewThought(event.target.value)} 
        />
        <p className='character-counter'>{newThought.length}/140</p>
        < SubmitButton />
      </form>
   
   
       {thoughts.map((thought) => (
        <article 
          key={thought._id}
          className="toughts-box">
          <p>{thought.message}</p>
          <button className="heart-button"> <Emoji symbol="❤️" /> {thought.hearts}</button>
          <p className="date">
            Created: {moment(thought.createdAt).fromNow()}
        </p>
        </article>
      ))}
    </section>
  )
}