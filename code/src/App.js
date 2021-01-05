import React, { useState, useEffect } from 'react'

import { ThoughtInput } from 'components/ThoughtInput'
import { ThoughtMessage } from 'components/ThoughtMessage'

export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const THOUGHTS_URL = 'https://share-happy-thought.herokuapp.com/thoughts'

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    /* fetch data from server, 20 latest thought posted and details for each post*/
    fetch(THOUGHTS_URL)
      .then((res)=>{
          return res.json()
      })
      .then(data => {
        setThoughts(data) /* data is an array of thoughts */
      })
  }

  /*posts message and then creates a new fetch to update the site with new information from the server*/ 
  const postThought = thought => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body:JSON.stringify({message: thought})
    })
      .then(()=> {
        fetchThoughts()
      })
  }

  /*posts data to the server when post is liked. Connected with onClick function in thoughtMessage. fetches again after the post to get the updated information from server*/
  const postHearts = messageId => {
    fetch(`https:/share-happy-thought.herokuapp.com/thoughts/${messageId}/like`, {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json"'}
      })
      .then (() => {
        fetchThoughts()
      });
  };


  /*returning components and passing props - functions and the thoughtarray.*/ 
  return (
    <main>
      <ThoughtInput onPostThought={postThought}/>
      {thoughts.map(thought=> 
      <ThoughtMessage key={thought._id} thought={thought} onPostHearts={postHearts}/>
      )} 
    </main>
  )
}
