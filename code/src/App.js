import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL_THOUGHTS } from './reusable/urls'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]) // state properties initialized as empty array
  
  useEffect(() => {    // useEffect hook
    fetchThoughtList()
  }, [])  
  
  const fetchThoughtList = () => {  // fetch request for resent thoughts
    fetch(API_URL_THOUGHTS)
      .then(res => res.json()) // response unpacked
      .then(thoughts => setThoughtList(thoughts)) // data recieved and applied
      .catch(err => console.error(err)) 
  }

  fetchThoughtList()

  return (
    <div>  
      {thoughtList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
          <p>{moment(moment.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
