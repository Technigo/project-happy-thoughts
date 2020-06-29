import React, {useEffect, useState}  from 'react'
import {MessageList} from './MessageList'
import {PostMessages} from './PostMessages'

const url = 'https://elins-happythoughts-api.herokuapp.com/thoughts'

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [postedMessage, setPostedMessage] = useState("");

  useEffect (() => {
    fetch (url)
    .then (res => res.json()) 
    .then (json => setThoughts(json))
  }, [postedMessage]);

  const onFormSubmit = message => {
  setPostedMessage (message)
  }

  const onLiked = thoughtId => {
    const uppdatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(uppdatedThoughts)
  }

return (
    <main>
      <PostMessages onFormSubmit={onFormSubmit}/>

      {thoughts.map(thought => (

      <MessageList key={thought._id} thought={thought} onLiked={onLiked} /> 
      ))}

    </main>
  )
}