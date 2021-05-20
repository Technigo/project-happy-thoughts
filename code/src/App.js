import React, { useState, useEffect } from 'react'

import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

import { API_URL, HEARTS_URL } from './reusable/Urls'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [thoughtNew, setThoughtNew] = useState('')

  useEffect(() => {
    fetchThoughtList()
  }, [])

  // FETCH TO IMPORT THOUGHTS
  const fetchThoughtList = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((thought) => setThoughtList(thought))
  }

  // FETCH TO POST NEW MESSAGE
  const handleThoughtNewChanged = (event) => {
    setThoughtNew(event.target.value)
  }

  // const reloadPage = () => {
  //   window.location.reload()
  // }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: thoughtNew })
    }
    fetch(API_URL, options)
      .then((response) => response.json())
      .then((receivedThought) => setThoughtList([...thoughtList, receivedThought]))
      // setTimeout(() => reloadPage(), 1000)
    setThoughtNew('')
  }
  // FETCH HANDLE HEARTS
  const handleHeartsIncrease = (thoughtID) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(HEARTS_URL(thoughtID), options)
      .then((response) => response.json())
      .then((receivedThought) => {
        const updatedThoughtList = thoughtList.map((thought) => {
          if (thought._id === receivedThought._id) {
            thought.hearts += 1
          }
          return thought
        })
        setThoughtList(updatedThoughtList)
      })
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
