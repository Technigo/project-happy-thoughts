import React, { useState, useEffect } from "react";
import { PostHappyThought } from "./components/PostHappyThought"
import { ThoughtList } from "./components/ThoughtList"

export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "GET",
    })
      .then(res => res.json())
      .then(json => { setThoughts(json) })
      .catch(error => console.error("Error:", error))
  }, [postedMessage]);


  //function to handle the submit-btn in PostHappyThought.
  const handleFormSubmit = (sendThought) => {
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message: sendThought }),
      headers: { 'Content-Type': 'application/json' }
    })
      //when the message saved to API, then send the new message to the message.
      .then(() => setPostedMessage(sendThought))



      .catch((error) => {
        alert('Try Again!', error)
      })
  }



  return (

    <div>
      <PostHappyThought onFormSubmit={handleFormSubmit} />
      {thoughts.map(thought => (
        <ThoughtList key={thought._id} thought={thought} />
      ))}


    </div>

  )
}
