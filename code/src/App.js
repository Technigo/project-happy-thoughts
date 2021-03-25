import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL, LIKES_URL } from './reusable/urls'

export const App = () => {
  const [toughtList, setToughtList] = useState([])
  const [toughtNew, setToughtNew] = useState('')

  //Detect when component is being mounted
  //First argument - what should happen, second - when
  useEffect(() => {
    fetchThoughtList()
  }, [])

  
  
  //Fetching the API data 
  const fetchThoughtList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(thoughts => setToughtList(thoughts))
      .catch(err => console.error(err))
  }

  //Update the form input value onChange
  const onToughtNewChange = (event) => {
    setToughtNew(event.target.value)
  }

  //Form submitted
  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { message: toughtNew })
    }
    //Sending POST request 
    fetch(API_URL, options)
      .then(res => res.json())
      .then(receivedTought => setToughtList([...toughtList, receivedTought]))
      .catch(err => console.error(err))
  }
  
  const onLikesIncrease = () => {
    fetch(LIKES_URL())
  }



  
  return (
    <div>
      {/* FORM */}
      <form onSubmit={onFormSubmit}>
        <label htmlFor='newTought'>Write new tought</label>
        <input 
        id='newTought'
        type='text'
        value={toughtNew}
        onChange={onToughtNewChange}
        />
        <button type='submit'>Send</button>  
      </form>
      


      {/* TOUGHT LIST */}
      {toughtList.map(tought => (
        <div key={tought._id}>
          <h4>{tought.message}</h4>
          <button onClick={onLikesIncrease._id}>
            {tought.hearts}
          </button>
          <p>- {moment(tought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
