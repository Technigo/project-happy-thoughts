import React, {useState, useEffect} from 'react'

import { Fetch_API } from './reusable/urls'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  
  useEffect(() => {
    fetchThoughtsList()
  }, [])

  const fetchThoughtsList = () => {
    fetch(Fetch_API)
      .then(result => result.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(err => console.error(err))          
  }

  return (
    <div>
      {thoughtsList.map(thoughts => (
        <div key={thoughts._id}>
          <h4>{thoughts.message}</h4>
        </div>
      ))}
    </div>
  )
}
