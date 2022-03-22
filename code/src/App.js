import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { API_URL } from './utils/urls'

export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThougt] = useState('')


  useEffect (() => {
  fetch(API_URL)
  .then((res) => res.json())
  .then((data) => setThoughts(data))
  },[])

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options ={
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message: newThought})
    }

    fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => setThoughts([data, ...thoughts]))
  }

  const likesCounter = (thoughtId) => {
    const options = {
      method: 'POST', 
    }

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, options)
    .then((res) => res.json())
    .then((data) => { 

      const updatedThoughts = thoughts.map(item => {
        if (item._id === data._id) {
          item.hearts += 1;
          return item;
        } else {
          return item;
        }
      })
      setThoughts(updatedThoughts)

    })
  }


  return (
    <div>
      <form onSubmit={onFormSubmit}>
      <label htmlFor='newThought'>Type your thought </label>
      <input 
      id="newThougt"
      type="text" 
      value={newThought} 
      onChange={(e) => setNewThougt(e.target.value)}/>
      <button type="submit">Send Thougth!</button>
      </form>

      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button onClick={() => likesCounter(thought._id)}>
            {''}
          &hearts; {thought.hearts}</button>
          <p className="date"> - Created at:{moment(thought.createdAt).fromNow()}</p>
        </div>  
      ))}
    </div>
  )

}
