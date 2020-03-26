import React, { useEffect, useState } from 'react'
import { MessageLikes } from './components/MessageLikes'
import { MessageInput } from './components/MessageInput'

const url = 'https://technigo-thoughts.herokuapp.com/'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  const onLiked = thoughtId => {
    console.log('Logging in the APP.js', thoughtId)

    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <main>
      <MessageInput onFormSubmit={onFormSubmit} />
      {thoughts.map(thought => (
        <MessageLikes key={thought._id} thought={thought} onLiked={onLiked} />
      ))}
    </main>
  )
}
