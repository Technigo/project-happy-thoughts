import React, { useState, useEffect } from 'react';
import { MessageList } from './Components/MessageList';
import { MessageInput } from './Components/MessageInput';
import { Loading } from './Components/Loading'

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true)
  const MESSAGES_URL = 'https://happy-thoughts-api-johanna.herokuapp.com/thoughts';

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then(json => { setThoughts(json) })
      .catch(error => console.log('Error:', error))
    setLoading(false)
  }, [])

  return (
    <main>
      <MessageInput />
      {loading && <Loading />}

      {thoughts.map(thought => (
        <MessageList
          key={thought._id}
          thought={thought}
        />
      ))}
    </main>
  )
}