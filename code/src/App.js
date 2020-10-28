import React, { useState, useEffect } from 'react';

import { ThoughtInput } from 'components/ThoughtInput'
import { ThoughtMessage } from 'components/ThoughtMessage';

export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

  useEffect(() => {
    fetchMessage()
  }, [])

    
  const onLikeThought = (likeId) => {
    
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likeId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  const onMessageChange = (thought) => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body:JSON.stringify({message: thought})
    })
      .then(()=> {
        fetchMessage()
      })
  }

  const fetchMessage = () => {
    /* fetch data from server*/
    fetch(THOUGHTS_URL)
      .then((res)=>{
          return res.json()
      })
      .then(data => {
        const filteredData = data.filter(thought => {
          return thought.message !== ""
        })
        setThoughts(filteredData) /* filteredData is an array of messages */
        })
    }

  return (
    <main>
      <ThoughtInput onMessageChange={onMessageChange}/>
      {thoughts.map(thought=> 
      <ThoughtMessage key={thought._id} thought={thought} onLikeThought={onLikeThought}/>
      )} 
    </main>
  )
}
