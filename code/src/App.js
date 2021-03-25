import React, { useState, useEffect } from 'react'


import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

import { API_URL, HEARTS_URL } from './reusable/urls'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [thoughtNew, setThoughtNew] = useState('')

  useEffect(() => {
    fetchThoughtList()
  }, [])

  const fetchThoughtList = () => {
    fetch (API_URL)
      .then(res => res.json())
      .then(thought => setThoughtList(thought))
      .catch(err => console.error(err))
  }

  const handleThoughtNewChanged = (event) => {
  setThoughtNew(event.target.value)
}

  const reloadPage = () => {
    window.location.reload()
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({ message: thoughtNew })
    }
    fetch(API_URL, options)
      .then(result => result.json())
      /*.then(() => fetchThoughtList)*/
      .then(receivedThought => setThoughtList([...thoughtList, receivedThought]))
      .catch(err => console.error(err))
      setTimeout(() => reloadPage(), 1000)
      
  }

  const handleHeartsIncrease =(thoughtID) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(HEARTS_URL(thoughtID), options)
    .then(result => result.json())
    .then(receivedThought => {
      const updatedThoughtList = thoughtList.map(thought =>{
        if (thought._id === receivedThought._id) {
          thought.hearts += 1
        }    
        return thought 
      })
      setThoughtList(updatedThoughtList)
    })
    
    .catch(err => console.error(err))
  }

  return (
    <div className="main">
      <ThoughtForm 
      thoughtNew={thoughtNew}
      onThoughtNewChanged={handleThoughtNewChanged}
      onFormSubmit={handleFormSubmit}
      />
      <ThoughtList 
      thoughtList={thoughtList}
      handleHeartsIncrease={handleHeartsIncrease}
      />
     
    </div>
   
  )
}


