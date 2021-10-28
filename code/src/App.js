import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL } from './utils/urls'

export const App = () => {
  const [thoughts, setThoughts] = useState([{message: 'hello', createdAt: '2021/10/12', hearts: 1, _id: 'asdf'}]) //should be empty array because later it will be non empty array
  const [newThought, setNewThought] = useState ('')

//calling useEffect after the component gets mounted
  useEffect (() => {
    fetch(API_URL) // fetch request when component is mounted to get the data from the API
      .then((res) => res.json())  //unpack json                  
      .then((data) => setThoughts(data)) //save the data in the state
  
    }, []) //pass an empty array

  const onFormSubmit = (event) => {
    event.preventDefault() //because we dont want the submission of the form to refresh the page
  
    const options = {
      method: 'POST',
      headers: { //for the API to know what type of data we will send
        'Content-Type': 'application/json', //type is json
      },
      body: JSON.stringify({ message: 'newThought' }) //"message" is the key of the object and value is the "my happy thought"
    }

    fetch(API_URL, options)
      .then(res => res.json())
      .then(newThought => setThoughts([newThought, ...thoughts]))
  }

  return ( //since state is updated, component renders some JS6. After JS6 rendered first time then useEffect gets triggered with console log
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">Type your thought</label> 
        <input 
          id="newThought"
          type="text" 
          value={newThought}
          onChange={e => setNewThought(e.target.value)}/>
          <button type="submit">Send thought!</button>
      </form>

      {thoughts.map(thought => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button>&hearts; {thought.hearts}</button>
          <p className="date">
            Created date: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </div>
  )
}
