import React, { useState, useEffect } from 'react'
import { ThoughtsList } from './ThoughtsList'
import { ThoughtInput } from './ThoughtInput'

const THOUGHTS_URL = 'https://louise-happy-thoughts-api.herokuapp.com/thoughts'

export const App = () => {
  const [thought, setThought] = useState('')
  const [thoughts, setThoughts] = useState([])

  const handleSubmit = event => {
    event.preventDefault()
    setThought('')

    fetch(THOUGHTS_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: thought })
      }
    ).then(res => res.json())
      .then(newThought => {
        setThoughts([newThought, ...thoughts])
      })
  }

  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setThoughts(data)
      })
  }, [])

  const sendHeart = (id) => {
    const endpoint = `${THOUGHTS_URL}${id}/like`

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then((updatedMessage) => {
        const updatedThoughts = [...thoughts]
        const index = thoughts.findIndex(thought => thought._id === id)
        updatedThoughts.splice(index, 1, updatedMessage)
        setThoughts(updatedThoughts)
      })
  }

  return (
    <div className='app'>
      <ThoughtInput
        onSubmit={handleSubmit}
        onChange={setThought}
        value={thought}
      />
      <ThoughtsList
        list={thoughts}
        onLike={sendHeart}
      />
    </div>
  )
}
