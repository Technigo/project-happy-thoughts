import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { API_URL } from './utils/commons'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [countChars, setCountChars] = useState(0)

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

  const numberOfChars = (event) => {
    const chars = event.target.value
    console.log(chars.length)
    return chars.length
  } 

  return (
    <div>
      <form onSubmit={onFormSubmit} className="thought-input-container">
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          rows="2"
          value={newThought} 
          onChange={(event) => {
            setNewThought(event.target.value)
            numberOfChars(event)
          }}>
        </textarea>
        <p className="char-counter">{countChars} characters</p>
        <button type="submit" className="send-thought"><span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span></button>
      </form>

      {thoughts.map(thought =>
        <div key={thought._id} className="thought-card">
          <p>{thought.message}</p>
          <div className="message-card-bottom-row">
            <div className="heart-likes-container">
              <button className="heart-button">
                <span role="img" aria-label="heart">❤️</span>
              </button>
              <div className="likes-text"> x {thought.hearts}</div>
            </div>
            <p className="date-text">{moment(thought.createdAt).fromNow()}</p>
          </div>
          
        </div>)}
    </div>
  )
}
