import React, { useEffect, useState } from 'react'


import { API_URL } from '../reusable/urls'

const MessageBoard = () => {

  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetchThoughts()
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setThoughts(data)
      })
  }
  return (
    <div>
      {thoughts.map(thought => (
        <div key={thought._id}>
          <div>{thought.message}</div>
          <div>{thought.createdAt}</div>
        </div>
      ))}
    </div>
  )

}
export default MessageBoard