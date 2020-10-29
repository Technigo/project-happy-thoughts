import React, {useEffect, useState} from 'react'

import {ThoughtsFeed} from './components/ThoughtsFeed.js'
import {ThoughtsInput} from './components/ThoughtsInput.js'
import {THOUGHTS_URL} from './urls.js'

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    thoughtsMessage();
  }, []);  

  const thoughtsMessage = () => {
    fetch(THOUGHTS_URL)
    .then(res => res.json())
    .then(data => setThoughts(data))
    .catch(error => console.error(error));
  }

  const thoughtsInput = (newThoughts) => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ message: newThoughts })
    })
    .then(() =>
    thoughtsMessage())
    .catch(error => console.error(error));
  }

  const onLiked = thoughtId => {

    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.heart += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }
  
  return (
    <>
      <ThoughtsInput onThoughtsChange={thoughtsInput}/>
      <ThoughtsFeed thoughtsFeed={thoughts} onLiked={onLiked}/>
    </>
  )
};
