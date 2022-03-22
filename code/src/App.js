import React from 'react'
import { useState, useEffect } from 'react'

import Form from 'components/Form'
import Thought from 'components/Thought'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')


  //This useEffect fetches data to get recent posts
  useEffect(()=> {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then(res => res.json())
        .then(json => setThoughts(json))
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()
  
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', { 
      method: 'POST', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
    })
  }

  return (
    <div>
      <Form 
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}/>

      {thoughts.map((thought)=> (
      <Thought 
        key={thought._id}
        thoughts={thought}
        />
      ))}
    </div>
  )
}

