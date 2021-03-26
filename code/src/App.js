import React, { useEffect, useState } from 'react'
import { THOUGHTS_URL } from 'reusable/urls'
// import moment from 'moment'


export const App = () => {
  const [happyThoughtsList, setHappyThougthsList] = useState([])
  
  //Two arguments - 1. The function - 2. when it should be triggered - array to trigger ONLY when mounted
  //When mounted - trigger fetchThoughtMessageList function 
  useEffect( () => {
    fetchHappyThoughtList()
  }, [])

  //GET - fetch reqest method in function - unpack data
  const fetchHappyThoughtList = () => {
    fetch(THOUGHTS_URL)
      .then(response => response.json())
      .then(thoughts => setHappyThougthsList(thoughts))
      .catch(err => console.error(err))
  }

  return (
    <div>
      {happyThoughtsList.map(thought => (
        <div key={thought._id}>
        <h4>{thought.message}</h4>
        </div>
      ))}
    </div>
  )
}
