import React, {useState, useEffect} from 'react'
import {NewThought} from './NewThought'
import {Replies} from './Replies'

const ThoughtsURL= "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const App = () => {
  const [existingThoughts, setExistingThoughts] = useState([]) // the existing thoughts in the list
  const [newMessage, setNewMessage] = useState('') // new thought that's being written -> remove new thought from textarea after submitting
  
  // fetches the existing thoughts from the API 
  const fetchThoughts = () => {
    fetch(ThoughtsURL)
    .then (response => response.json())
    .then ((thoughts) => {
      setExistingThoughts(thoughts)
    })
  }
    
  useEffect(() => {
    fetchThoughts();
  }, []);

  // posts a new message from the NewThought component to the API
  const postThought = (event) => {
    event.preventDefault();
    
    fetch(ThoughtsURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: newMessage})
    })
    .then (response => response.json())
    .then(() => { 
      fetchThoughts(); // updates the list of posted thoughts
      setNewMessage(''); // resets the textarea
    })
  }

  return (
    <>
      <NewThought 
        newMessage={newMessage} // write new thought
        setNewMessage={setNewMessage} // reset textarea
        handleSubmit={postThought} // send new thought
        />
        

      <Replies 
        allReplies={existingThoughts} // list of all posted thoughts
        onLike={()=>fetchThoughts()} // updates the list of posted thoughts
        />
    </>
  )
}