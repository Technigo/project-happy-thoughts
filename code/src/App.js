import React, { useState, useEffect } from 'react'

import { API_URL_THOUGHTS } from './reusable/urls'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]) // state properties
  
  useEffect(() => {    // useEffect hook
    fetchThoughtList()
  }, [])  
  
  const fetchThoughtList = () => {  // fetch request for resent thoughts
    fetch(API_URL_THOUGHTS)
      .then(res => res.json()) // response unpacked
      .then(thoughts => setThoughtList(thoughts)) // data
      .catch(err => console.error(err)) 
  }

  fetchThoughtList()

  return (
    <div>
      {thoughtList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
        </div>
      ))}
    </div>
  )
}
