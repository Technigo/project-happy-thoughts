import React, {useState, useEffect} from 'react'

// https://technigo-thoughts.herokuapp.com/

export const App = () => {

  // Assuming you have this kind of state in your component:
const [thoughts, setThoughts] = useState([]) 
const [myThought, setMyThought] = useState("")

// Later, in your code which handles the form submission, you 
// could have something which looks like this to send the new 
// message, get the response from the API, and then add it to 
// the thoughts array:
useEffect(() => {
  fetch("https://technigo-thoughts.herokuapp.com/")
    .then(res => res.json())
    .then(json => {
      setThoughts(json)
    console.log("thoughts", thoughts)});
}, [])


const handleFormSubmit = (event) => {
  event.preventDefault()
  console.log(myThought)

}


  return (
    <div>
      Find me in src/app.js!
      <div>
        {thoughts.map((thought)=>{
          return(<p key= {thought.message}>{thought.message}</p>)
        })}
      </div>
      <form onSubmit={handleFormSubmit}>
        <label>
          What is your thought?
          <input type="text"
          value = {myThought}
          onChange={e => setMyThought(e.target.value)}
          required
          />

        </label>
        <button type ="submit">send thought</button>
      </form>
    </div>
  )
}
