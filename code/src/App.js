import React, { useState, useEffect } from 'react'

import API_URL from './reusable/urls';


export const App = () => {

  const [thoughtsList, setThoughtsList] = useState([]);

  useEffect(() => {
    fetchThoughtList()
  }, []);

  const fetchThoughtList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(err => console.error(err));
  }


  return (

    <div>
      {thoughtsList.map(thought => (
        <div
          key={thought._id}>
          <h4>{thought.message}</h4>
          <p>{thought.createdAt}</p>
        </div>
      ))}
    </div>
  )
}
