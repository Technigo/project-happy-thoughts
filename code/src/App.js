import React, { useState, useEffect } from 'react'
import moment from 'moment';

import { Form } from './components/Form';

const API_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetchThoughts();
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => setThoughts(json))
      .catch(err => console.error(err));  
  }

  const onSubmit = (message) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => fetchThoughts())
      .catch(err => console.log("error:", err))
  }


  return (
    <div>
      <Form 
        onNewThought={onSubmit}/>
      {thoughts.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
          <h4>{thought.hearts}</h4>
          <p>- {moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}


