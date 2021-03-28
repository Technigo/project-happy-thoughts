import React, { useState, useEffect } from 'react'

import ThoughtForm from './components/ThoughtForm.js'
import ThoughtList from './components/ThoughtList.js'

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

  const handleThoughtNewChanged = (event) => { // handle indicates that this handler will be passed to a component and used there.
    setThoughtNew(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    window.location.reload()
    event.target.reset()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: thoughtNew })
    };

    fetch(API_URL_THOUGHTS, options)
      .then(res => res.json())
      //.then(receivedThought => setThoughtList([...thoughtList, receivedThought]))
      .then(() => fetchThoughtList())
      .catch(err => console.error(err));
  }
  const handleHeartsIncrease = (id) => {
    const options = {
      method: 'POST',  // POST fetch request
      headers: {
        'Content-Type': 'application/json' // text message for a new thought in json format is going to be sent
      }
    }

    fetch(API_URL_HEARTS(id), options)
      .then(() => fetchThoughtList())
      .catch(err => console.error(err))
  }

  return (
    <section className="section">
      <ThoughtForm 
        thoughtNew={thoughtNew} 
        onThoughtNewChanged={handleThoughtNewChanged}
        onFormSubmit={handleFormSubmit}  
      />
      <ThoughtList 
        thoughtList={thoughtList}
        handleHeartsIncrease={handleHeartsIncrease}
      />
    </section>
  )
}
