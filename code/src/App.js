import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { API_URL } from './utils/commons'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then((data) => setThoughts(data))
  }, [])

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought})
    }

    fetch(API_URL, options)
      .then((res) => res.json()
      .then((data) => setThoughts([data, ...thoughts])))
  }

  return (
    <div>
      <form onSubmit={onFormSubmit} className="thought-input-container">
        <label htmlFor="newThought">Type your thought</label>
        <input
          id="newThought"
          type="text"
          value={newThought} 
          onChange={(event) => setNewThought(event.target.value)}
        />
        <button type="submit" className="send-thought"><span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span></button>
      </form>

      {thoughts.map(thought =>
        <div key={thought._id} className="thought-card">
          <p>{thought.message}</p>
          <button>&hearts; {thought.hearts}</button>
          <p className="date">- {moment(thought.createdAt).fromNow()}</p>
        </div>)}
    </div>
  )
}
