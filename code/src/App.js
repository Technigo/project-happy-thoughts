import React, { useEffect, useState } from 'react'

import { ThougthForm } from './components/ThoughtForm'
import { ThoughtList} from './components/ThoughtList'

import { THOUGHTS_URL, HEART_URL } from 'reusable/urls'


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
  const handleNewHappyThoughtChange = (event) => {
    setNewHappyThought(event.target.value)
  }

  //POST - request
  const handleFormSubmit = (event) => {
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
      .then(() => fetchHappyThoughtList())
      .catch(err => console.error(err))

      event.target.reset()
  }

  //2nd POST Request - pass messageID as id to the fetch request
  //Any request we send to backend - we can ask server to get, send, update, delete
  //Default is get - if you want to add you need POST request to send information on increase hearts
  const handleHeartsIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(HEART_URL(id), options)
      .then(response => response.json())
      // refetch data
      .then(() => fetchHappyThoughtList())
      .catch(err => console.error(err))
  }

  return (
    <div className="container">
      <ThougthForm 
        newHappyThought={newHappyThought}
        onNewHappyThoughtChange={handleNewHappyThoughtChange}
        onFormSubmit={handleFormSubmit}
      />
      <ThoughtList 
        happyThoughtsList={happyThoughtsList}
        handleHeartsIncrease={handleHeartsIncrease}
      />
    </div>
  )
}
