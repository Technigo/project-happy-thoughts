import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { API_URL_THOUGHTS } from './reusable/urls'
import { API_URL_HEARTS } from './reusable/urls'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]) // state properties initialized as an empty array
  const [thoughtNew, setThoughtNew] = useState('') // state properties initialized as an empty string

  useEffect(() => {    // useEffect hook
    fetchThoughtList()
  }, [])  
  
  const fetchThoughtList = () => {  // GET fetch request for resent thoughts
    fetch(API_URL_THOUGHTS)
      .then(res => res.json()) // response unpacked
      .then(thoughts => setThoughtList(thoughts)) // data recieved and applied
      .catch(err => console.error(err)) 
  }

  const onThoughtNewChanged = (event) => {
    setThoughtNew(event.target.value)
  }

  const onFormSubmit = (event) => {
      event.preventDefault()
      //console.log('Form Submitted!', thoughtNew)
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: thoughtNew })
      };
  
      fetch(API_URL_THOUGHTS, options)
        .then(res => res.json())
        .then(receivedThought => setThoughtList([...thoughtList, receivedThought]))
        .catch(err => console.error(err));
    } 
  const onHeartsIncrease = (id) => {
    const options = {
      method: 'POST',  // POST fetch request
      headers: {
      'Content-Type': 'application/json' // text message for a new thought in json format is going to be sent
    }
  }

    fetch(API_URL_HEARTS(id), options)
      .then(res => res.json())
      .then(recievedThought => {
        const updateThoughtList = thoughtList.map(thought => {
          if (thought._id === recievedThought._id) {// only id could be used of instead recievedThought._id
            thought.hearts += 1  // The if statement will only work for the thought clicked on
          } 
          return thought      
        })
        setThoughtList(updateThoughtList)
      })
      .catch(err => console.error(err))
  }

  //fetchThoughtList()

  return (
    <div>  
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <input
        id="newThought"
        type="text"
        value={thoughtNew}
        onChange={onThoughtNewChanged}
        />
        <button type="submit">Send Happy Thought</button>
      </form>
      {thoughtList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
          <button onClick={() => onHeartsIncrease(thought._id)}>
          * {thought.hearts}
          </button>
          <p>{moment(moment.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
