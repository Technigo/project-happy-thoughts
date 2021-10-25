import React, { useState, useEffect } from 'react'
import API_URL from './utils/Commons'
import moment from 'moment'
import Form from 'components/Form'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
  })

  return (
    <>
      <Form />
      {thoughts.map((thought) => (
        <div className="main-container" key={thought.id}>
          <p>{thought.message} </p>
          <button> &hearts; {thought.hearts} </button>
          <p className="date">
            -- Thought shared at: {moment(thought.createdAt).fromNow()} --{' '}
          </p>
        </div>
      ))}
      <div>Dev by Jakob </div>
    </>
  )
}
