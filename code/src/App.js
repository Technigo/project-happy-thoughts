import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { API_URL } from './utils/urls'

export const App = () => {


  const [newThought, setNewThought] = useState([])
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {

    fetch(API_URL)
    .then((res) => res.json())
    .then(data => setThoughts(data))

  }, [] )


  const onFormSubmit = (e) => {
    e.preventDefault()
    // console.log("submitted: ", newThought)
    fetch( API_URL, 
        { method: 'POST', headers: { 'Content-Type': 'application/json',}, body: JSON.stringify({ message: newThought }) }
      ).then((res) => res.json()).then(data => setThoughts([data, ...thoughts]))
  }

  console.log(thoughts);

  return (

    <div>

    <form onSubmit={onFormSubmit}> 
      <label htmlFor="newThought" >Type input here</label>
      <input value={newThought} 
      onChange={(e) => setNewThought(e.target.value)}
      id={newThought}
      />

      <button type="submit">Submit</button>
    </form>

  {thoughts.map(thought => (
    <div key={thought._id}>
      <p>{thought.message}</p>
      <button> &hearts; {thought.hearts} </button>
      <p className="date">Created at: {moment(thought.createdAt).fromNow()} </p>
    </div>
  ))  
  }
    </div>
  )
}
