import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL, HEARTS_URL }  from './reuseable/api_endpoints.js'


export const App = () => {
  const [thoughtList, setThoughtList] = useState([])   
  const [thoughtNew, setThoughtNew] = useState('')

  useEffect(() => {
    fetchThoughtList()
  }, [])
  
  const fetchThoughtList = () => {
    fetch (API_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtList(thoughts))
      .catch(err => console.error(err))
  }
 
  const onThoughtNewChange = (event) => {
    setThoughtNew(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: thoughtNew })
    }
    
    fetch(API_URL, options)
      .then(res => res.json())
      .then(recievedThought => setThoughtList([...thoughtList, recievedThought]))
  }

  const onHeartsIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(HEARTS_URL(id), options)
      .then(res => res.json())
      .then(recievedThought => {
        const updatedThoughtList = thoughtList.map(thought => {
          if (thought._id === recievedThought._id) {
            thought.likes += 1
          }
          return thought
        })
      })
      .catch(err => console.error(err))
  }

  return (
    <main>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">Send a happy thought!</label>
        <input 
          id="newThought"
          type="text"
          value={thoughtNew}  
          onChange={onThoughtNewChange} 
        />
        <button type="submit">Send thought!</button>
      </form>
      {thoughtList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
          <button onClick={() => onHeartsIncrease(thought._id)}>
            {thought.hearts}
            ❤️
          </button>
          <p className='date-stamp'>{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </main>
  )
}
