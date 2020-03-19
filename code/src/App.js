import React, {useState, useEffect} from 'react'
import { MyThought } from 'components/MyThought'
import { Cards } from 'components/Cards'

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
  // Send the POST request with the input from your form (instead
  // of 'Hello world' like this example does):
  fetch('https://technigo-thoughts.herokuapp.com/', { 
    method: 'POST', 
    body: JSON.stringify({ message: myThought }),
    headers: {'Content-Type': 'application/json'},
      // 'Content-Type': 'application/x-www-form-urlencoded',
    
  })
    .then((res) => res.json())
    .then((newThought) => {
      console.log("new thought", newThought)
      // Now you have `newThought` which is the response from the
      // API as documented at the top of this readme. You can use
      // it to update the `thoughts` array: 
      setThoughts((previousThoughts) => [newThought, ...previousThoughts])
    })
}


  return (
    <div>
      Find me in src/app.js!
      <div>
      <Cards thoughts={thoughts} setThoughts={setThoughts} />

     
      </div>
      <form onSubmit={handleFormSubmit}>
      <MyThought myThought={myThought} setMyThought={setMyThought} />
        <button type ="submit">send thought</button>
      </form>
    </div>
  )
}




