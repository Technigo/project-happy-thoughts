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
  }

  const handleThoughtNewChanged = (event) => { // handle indicates that this handler will be passed to a component and used there.
    setThoughtNew(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: thoughtNew })
    }

    fetch(API_URL_THOUGHTS, options)
      .then(res => res.json())
      .then(receivedThought => {
        setThoughtList([receivedThought, ...thoughtList ])
      })
      setThoughtNew('') // refreshes the input field
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