import React, { useEffect, useState } from 'react'
import { API_URL, LIKE_URL } from 'urls'
import { Form } from 'Form'
import { Messages } from 'Messages'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [filter, setFilter] = useState('Newest')

  //Fetches the messages from the API
  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }

  /*const sortThoughts = thoughts.sort(() => {
    return new Date(oldest.createdAt) - new Date(newest.createdAt)
  })*/

  //POST likes into the API and fetches it
  const handleLikedThoughts = (id) => {
    const options = {
      method: 'POST',
    }
    fetch(LIKE_URL(id), options)
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
      })
      .catch((error) => error)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className='container'>
      <div className='main'>
        <Form thoughts={thoughts} setThoughts={setThoughts} />

        <Messages
          thoughts={thoughts}
          setThoughts={setThoughts}
          onLikeClick={handleLikedThoughts}
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </div>
  )
}
