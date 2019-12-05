import React, { useState, useEffect } from 'react';
import { HappyThoughts } from "./components/HappyThoughts";
import { Form } from "./components/Form";
import './app.css'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
    setLoading(false)
  }, [postedMessage])

  const handleFormSubmit = (message) => {
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setPostedMessage(message))
      .catch(err => console.log("error:", err))
  }

  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }
  // The "onThoughtLiked" function is passed down, via props("likedThoughtId"), 
  //through the HappyThoughts component and into the Heart component. 
  // That component can then invoke the function with the thought id and then the 
  // App.js component can update the state with the new count and re-render the updated thought.


  //UseEffect: if we dont say to it what to listen to and when to change/update it 
  //will change everytime the state is changing and will create an infinity loop.
  //With an empty array it will only fetch once when the component did mount. 
  //If we add somehthing in the array/dependency[postedMessage] it will do the fetch when that changes.

  return (
    <div className="app">
      <Form onFormSubmit={handleFormSubmit} />
      <br></br>
      {loading && <h3>Loading happy thoughts...</h3>}

      {thoughts.map(thought => (
        <HappyThoughts key={thought._id}
          thought={thought}
          onThoughtLiked={onThoughtLiked} />
      ))}

      <footer>Technigo Bootcamp 2019 © Linda Isell</footer>
    </div>
  )
}
