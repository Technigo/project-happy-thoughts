import React from 'react';
import { Messages } from './components/Messages';
import { Thoughts } from './components/Thoughts';

export const App = () => {

  const onLiked = thoughtId => {
    console.log("Logging in the APP.js", thoughtId)
  }

  const updatedThoughts = thought.map(thought => {
    if (thought._id === thoguhtId) {
      thought.hearts += 1
    }
    return thought
  })
  setThoughts(updatedThoughts)

  return (
    <div> 
      <Thoughts />
      <Messages key={thought._id} thought={thought} onLiked={onLiked} />
    </div>
  )
}
