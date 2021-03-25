import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL_THOUGHTS } from './reusable/urls'

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
    fetch(API_URL_THOUGHTS, {
      method: 'POST',  // POST fetch request
      headers: {
        'Content-Type': 'application/json' // text message for a new thought in json format is going to be sent
      },
      body: JSON.stringify({ message: thoughtNew }) // "message" equals to the name in the json, wrapped in stringify to pack in JSON format
    })
  }

  fetchThoughtList()

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
          <p>{moment(moment.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
