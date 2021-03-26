import React, { useEffect, useState } from 'react'
import { THOUGHTS_URL } from 'reusable/urls'
import moment from 'moment'


export const App = () => {
  const [happyThoughtsList, setHappyThougthsList] = useState([])
  const [newHappyThought, setNewHappyThought] = useState('')

  //Two arguments - 1. The function - 2. when it should be triggered - array to trigger ONLY when mounted
  //When mounted - trigger fetchThoughtMessageList function 
  useEffect( () => {
    fetchHappyThoughtList()
  }, [])

  //GET - fetch reqest method in function - unpack data
  const fetchHappyThoughtList = () => {
    fetch(THOUGHTS_URL)
      .then(response => response.json())
      .then(thoughts => setHappyThougthsList(thoughts))
      .catch(err => console.error(err))
  }

  //Add new thought to state 
  const onNewHappyThoughtChange = (event) => {
    setNewHappyThought(event.target.value)
  }

  //POST - request
  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newHappyThought})
    }
    fetch(THOUGHTS_URL, options)
      .then(response => response.json())
      .then(receivedHappyThought => setHappyThougthsList([receivedHappyThought,...happyThoughtsList]))
  }

  return (
    <div>
      <form onSubmit={onFormSubmit} className="new-thought-form">
        <label htmlFor="newThought">What´s making you happy right now? </label>
        <textarea 
          id="newThought" 
          cols="20" 
          rows="5"
          onChange={onNewHappyThoughtChange} 
          className="thought-message-text-area" 
          placeholder="Type your happy thoughts here :)"
        />
        <button type="submit"><span role="img" aria-label="heart emoji">❤️</span>Send Happy Thought<span role="img" aria-label="heart emoji">❤️</span></button>
      </form>
      {happyThoughtsList.map(thought => (
        <div key={thought._id}>
        <h5 className="thought-message">{thought.message}</h5>
        <button>❤️</button>
        <p className="thought-date">{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
