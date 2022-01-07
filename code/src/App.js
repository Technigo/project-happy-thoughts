import React, { useState, useEffect } from 'react'

import ThoughtForm from './components/ThoughtForm'
import ThoughtItem from './components/ThoughtItem'

import { API_URL, LIKES_URL } from './utils/urls'

export const App = () => {
  const [thoughts, setThoughts] = useState([{message: 'hello', createdAt: '2021/10/12', hearts: 1, _id: 'asdf'}]) //should be empty array because later it will be non empty array
  const [newThought, setNewThought] = useState ('')

  //calling useEffect to fetch all thoughts after the component gets mounted
  useEffect (() => {
    fetchThoughts()
  }, [])
  
  const fetchThoughts = () => {
    fetch(API_URL) // fetch request when component is mounted to get the data from the API
      .then((res) => res.json())  //unpack json                  
      .then((data) => setThoughts(data.response)) //save the data in the state
  }

  const handleFormSubmit = (event) => {
    event.preventDefault() //because we dont want the submission of the form to refresh the page
  
    const options = {
      method: 'POST',
      headers: { //for the API to know what type of data we will send
        'Content-Type': 'application/json', //type is json
      },
      body: JSON.stringify({ message: newThought }) //"message" is the key of the object and value is the "my happy thought"
    }

    fetch(API_URL, options) //send request to add a new thought
      .then(res => res.json())
      .then(newThought => {

        fetchThoughts()
        setNewThought('') //clears input field after submitting thought
      }) 
  }

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    }

    fetch(LIKES_URL(thoughtId), options)
      .then(res => res.json())
      .then(data => {
        
        fetchThoughts()      
      })
  }
 
  return ( //since state is updated, component renders some JS6. After JS6 rendered first time then useEffect gets triggered with console log
    <div className="main">
      <p>&hearts; Happiness is only real when shared &hearts;</p>
      <fieldset>
        <ThoughtForm 
          onFormSubmit={handleFormSubmit}
          newThought={newThought}
          setNewThought={setNewThought} 
        />

        {thoughts.map(thought => (
          <ThoughtItem 
            key={thought._id} 
            thought={thought} 
            onLikesIncrease={handleLikesIncrease}
          />
      ))}
      </fieldset>
    </div>
  )
}
