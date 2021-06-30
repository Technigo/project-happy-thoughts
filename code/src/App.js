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
      .then(recievedThought => setThoughtList([recievedThought,...thoughtList]))
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
          return thought;
        });
        setThoughtList(updatedThoughtList)
      })
      .catch(err => (err))
  }

  return (
    <main>
      <form 
        className="thought-card" 
        onSubmit={onFormSubmit}>
        <label 
          htmlFor="newThought"
          >What is making you happy right now?
        </label>
        <textarea 
          className="send-thought_input-field"
          id="newThought"
          type="text"
          placeholder="Type your thoughts here..."
          maxLength="140"
          value={thoughtNew}  
          onChange={onThoughtNewChange} 
        ></textarea>
        <button 
          className="send-thought_button" 
          type="submit"> 
            <span 
              role="img" 
              aria-label="Heart emoji"
              className="send-heart_button"
            >❤️</span>
            Send Happy Thought! 
            <span 
              role="img" 
              aria-label="Heart emoji"
              className="send-heart_button"
            >❤️</span>
        </button>
      </form>
      {thoughtList.map(thought => (
        <div 
          className="thought-card" 
          key={thought._id}>
          <h4>{thought.message}</h4>
          <button 
            className="thought-heart_button" 
            onClick={() => onHeartsIncrease(thought._id)}>
              <span 
                role="img" 
                aria-label="Heart emoji"
                className="thought-heart_emoji"
              >❤️</span>
            <span> x </span>
            {thought.hearts}
          </button>
          <p 
            className='date-stamp'
            >{moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </main>
  )
}
