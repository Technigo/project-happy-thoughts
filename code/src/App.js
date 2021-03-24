import React, { useState, useEffect } from 'react'

import { API_URL } from './reusable/Urls'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])

  useEffect(() => {
    fetchThoughtsList()
  }, [])

  const fetchThoughtsList = () => {
    fetch (API_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(err => console.error(err))
  }
  fetchThoughtsList()
  return (
    <div>
      {thoughtsList.map(thought =>(
        <div key={thought._id}>
          <h4>{thought.message}</h4>
        </div>
      ))}
    </div>
  )
}
