import React, { useState, useEffect } from 'react'
import Moment from 'moment'

import { API_URL }  from './reuseable/api_endpoints.js'
import moment from 'moment'

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
          <p>{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </main>
  )
}
