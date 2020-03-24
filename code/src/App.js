import React, {useState, useEffect} from 'react'
import {PostedThoughts} from './Thoughts'
import {MessageInput} from './MessageInput'

export const App = () => {
const [ thoughts, setThoughts ] = useState([])
const MESSAGE_URL = 'https://technigo-thoughts.herokuapp.com/'

  useEffect(() => {
    fetch(MESSAGE_URL)
      .then((res) => res.json())
      .then(json => {
        setThoughts(json)
      }
      );
}, []);

  const onLiked = thoughtId => {
  const updatedThoughts = thoughts.map(thought => {
    if (thought._id === thoughtId) {
      thought.hearts += 1
    }
    return thought
  })
  
  setThoughts(updatedThoughts)}

  return (
    <div className="thoughts">
      <MessageInput />{
      thoughts.map(thought => (
         <PostedThoughts key={thought._id} onLiked={onLiked} thought={thought} />
     )) 
     }
    </div>
  )
    }
