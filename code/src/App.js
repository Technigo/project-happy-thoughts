import React, { useState, useEffect } from 'react'

import { API_URL }  from './reuseable/api_endpoints.js'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])   

  useEffect(() => {
    fetchThoughtList()
  }, [])
  
  const fetchThoughtList = () => {
    fetch (API_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtList(thoughts))
      .catch(err => console.error(err))
  }
 
console.log(thoughtList)

  return (
    <main>
      {thoughtList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
        </div>
      ))}
    </main>
  )
}
