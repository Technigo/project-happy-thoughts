import React, { useState, useEffect } from "react"
import {HappyWords} from "./HappyWords"
 

export const App = () => {
const [thoughts, setThoughts] = useState([])
const [happyWords, setHappyWords] = useState([])



const handleSubmit = event => {
  event.preventDefault();
  fetch('https://technigo-thoughts.herokuapp.com/', { 
    method: 'POST', 
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ message: happyWords })
  })
    .then((res) => res.json())
    .then((newThought) => {
      setThoughts((thoughts) => [newThought, thoughts])
    })
}

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
    .then(res => res.json())
    .then(json=> 
    setThoughts(json)
    )
  },[]);

  return (
    <div className="WrapperDiv">
      <form onSubmit ={handleSubmit}>
        <div className="FormDiv">
          <HappyWords happyWords={happyWords} setHappyWords={setHappyWords}/>
        </div>
        <button type="submit" className="SubmitButton" onChange={event => setHappyWords(event.target.value)} disabled={happyWords === " "}>Post</button>
      </form>
      <div className="SubmitButton">
            
      </div>  
    <div>
      <ul>
         {thoughts.map(thought => (
              <li className="HappyThoughtsCard"> 
               {thought.message}
              </li>
         ))};
         </ul>
    </div>
    </div>
  )
}
