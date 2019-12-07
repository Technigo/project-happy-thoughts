import React, { useState, useEffect } from 'react'
import {HappyThoughts} from './components/HappyThoughts'
import {HappyForm} from './components/HappyForm'
import './components/app.css'

const url = "https://technigo-thoughts.herokuapp.com/"

export const App = () => {
const [thoughts, setThoughts] = useState ([])
const [postedMessage, setPostedMessage] = useState("")


useEffect(() => {
  fetch('https://technigo-thoughts.herokuapp.com/')
  .then (res => res.json())
  .then (json => setThoughts(json));
}, [postedMessage]);

const onFormSubmit = message => {
  setPostedMessage(message)
}

  return (
    <div className="thoughts-flow">
      <div>
      <HappyForm onFormSubmit={onFormSubmit} />
      {thoughts.map(thought => (
        <HappyThoughts key={thought._id} thought={thought} />
      ))}
      </div>
    </div>
  )
}
