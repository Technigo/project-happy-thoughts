import React, { useState, useEffect } from 'react'

import { API_URL } from './reusable/url'
 
export const App = () => {

  const [thoughtsList, setThoughtsList] = useState([]);

  useEffect(() => {
    fetchMessageList();

  },[])


    const fetchMessageList = () => {
      fetch(API_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(err => console.error(err)) 

    }

  return (
    <div>
      {thoughtsList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.text}</h4>
        </div>  

      ))}
    </div>
  )
}