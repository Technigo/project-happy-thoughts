import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { API_URL } from './utils/urls'

export const App = () => {
const [thoughts, setThoughts] = useState([])
const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
  }, []) 

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch(API_URL, options)
      .then(res => res.json())
      .then(data => setThoughts([data, ...thoughts]))
  }

  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <label htmlFor='newThought'className='input-label'>Type your thought</label>
        <input 
        className='text-input'
          id='newThought'
          type='text' 
          value={newThought} 
          onChange={(e) => setNewThought(e.target.value)}
          />
        <button type='submit' className='btn-send'>Send happy thought <span role='img' aria-label='heart emoji'>❤️</span></button>
      </form>

     {thoughts.map(thought => (
       <div key={thought._id} className='thought-item'>
         <p className='thought-message'>{thought.message}</p>
         <div className='likesAndTime'>
          <button className='btn'><span className='btn-heart' role='img' aria-label='heart emoji'>❤️</span> x {thought.hearts}</button>
          <p className='time'>{moment(thought.createdAt).fromNow()}</p>
         </div>
       </div>
      ))}
    </div>
)
}
