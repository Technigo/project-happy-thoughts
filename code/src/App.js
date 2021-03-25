import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL_THOUGHTS } from './reusable/urls'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]) // state properties initialized as an empty array
  const [thoughtNew, setThoughtNew] = useState('') // state properties initialized as an empty string

  useEffect(() => {    // useEffect hook
    fetchThoughtList()
  }, [])  
  
  const fetchThoughtList = () => {  // fetch request for resent thoughts
    fetch(API_URL_THOUGHTS)
      .then(res => res.json()) // response unpacked
      .then(thoughts => setThoughtList(thoughts)) // data recieved and applied
      .catch(err => console.error(err)) 
  }

  const onThoughtNewChanged = (event) => {
    setThoughtNew(event.target.value)
  }

  fetchThoughtList()

  return (
    <div>  
      <form>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <input
        id="newThought"
        type="text"
        value={thoughtNew}
        onChange={onThoughtNewChanged}
        />
      </form>
      {thoughtList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
          <p>{moment(moment.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
