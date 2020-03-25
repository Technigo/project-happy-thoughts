import React, { useState, useEffect } from 'react';
import { MessageList } from './Components/MessageList';
import { MessageInput } from './Components/MessageInput';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then(json => { setThoughts(json) })
      .catch(error => console.log('Error:', error))
  }, [])

  return (
    <main>
      <MessageInput />
      {thoughts.map(thought => (
        <MessageList
          key={thought._id}
          thought={thought}
        />
      ))}
    </main>
  )
}