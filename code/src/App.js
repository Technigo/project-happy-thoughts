import React, { useEffect, useState } from 'react'
// import {MessageInput} from "./MessageInput.js"
// import {MessageList} from "./MessageList.js"
import {HappyThought} from "./HappyThought.js"
import {HappyForm} from "./HappyForm.js"

const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const App = () => {
  //here we get the list of thoughts fetching from backend
  const [thoughts, setThoughts] = useState([]);
  const [postedMessage, setPostedMessage] = useState("");

  //here the fetch itself is happenning for the posted thoughts from the backend
  //this useeffect will be called when the postedMessage is changing 
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(json => setThoughts(json))
  }, [postedMessage])

  //when we submit the form we are using the postedMessage to be the new message
  const onFormSubmit = message => {
    setPostedMessage(message);
  }

  const onLiked = thoughtId => {
    console.log("Loggin in the APP.js", thoughtId)
    //just to check if the function is being called and has an id

    const updatedThoughts = thoughts.map(thought => {
      if(thought._id === thoughtId){
        thought.hearts += 1
      }
      return thought
      })
      setThoughts(updatedThoughts)
    }

    return (
      <main>
        <HappyForm onFormSubmit = {onFormSubmit} />
          {thoughts.map(thought => (
        <HappyThought key={thought._id} 
                      // this one shows the thought
                      thought={thought} 
                      //this is a function
                      onLiked={onLiked}/>
))}
    </main>
  )
}
