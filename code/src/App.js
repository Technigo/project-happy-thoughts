import React, { useState, useEffect } from 'react'
import API_URL from './utils/Commons'
// import moment from 'moment'
import Form from 'components/Form'
import ThoughtCard from 'components/ThoughtCard'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
  })

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
  }

  const handleAddedLikes = (id) => {
    const options = {
      method: 'POST',
    }
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,
      options
    )
      .then((response) => response.json())
      .then(() => {
        fetchThoughts()
      })
      .catch((error) => error)
  }

  return (
    <>
      <Form setThoughts={setThoughts} thoughts={thoughts} />
      {thoughts.map((thought) => (
        <ThoughtCard
          key={thought._id}
          thought={thought}
          handleAddedLikes={handleAddedLikes}
        />
      ))}
      <div>Dev by Jakob </div>
    </>
  )
}
