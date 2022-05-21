import React, { useEffect, useState } from 'react'
import ThoughtForm from 'components/ThoughtForm'
import ThoughtItem from 'components/ThoughtItem';


const API_URL="https://jenny-happy-thought-api.herokuapp.com/thoughts"
const LIKES_URL =(thoughtId) =>
`https://jenny-happy-thought-api.herokuapp.com/thoughts/${thoughtId}/like`;


export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')


  useEffect(() => {
  fetchThoughts()
 }, []) 

  const fetchThoughts = () => {

  fetch(API_URL)
  .then((res) => res.json())
  .then((data) => setThoughts(data))

  }

 const handleFormSubmit = (event) => {
 event.preventDefault()
 
 const options = { 
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify({ message: newThought }),
 }

 fetch(API_URL, options)
 .then((res) => res.json())
 .then((data) => {
 fetchThoughts()
 setNewThought('') 
 })
}

const handleLikesIncrease = (thoughtId) => {
const options = {
 method: 'POST',
  }

 fetch(LIKES_URL(thoughtId), options)
  .then((res) => res.json())
   .then((data) => {
 fetchThoughts()
   })
 }

  return (
    <div className="container">
 
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
      <ThoughtItem
        key={thoughts._id}
        thought={thought}
        onLikesIncrease={handleLikesIncrease}
      />
      ))}
    </div>
 





 

);
};