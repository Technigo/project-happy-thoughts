import React, { useEffect, useState } from 'react'
import { API_URL} from './utils/urls'
import { ThoughtForm } from './Components/ThoughtForm'
import { ThoughtItem } from './Components/ThoughtItem'


export const App = () => {
const [thoughts, setThoughts] = useState([])
const [newThought, setNewThought] = useState('')


useEffect (() => {
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => setThoughts(data))},[])

const handleFormSubmit = (event) => {
  event.preventDefault()

const options = {
  method:'POST',
  headers: {
      'Content-Type': 'application/json',
      },
    body: JSON.stringify({message: newThought})
    }

  fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => setThoughts([data, ...thoughts]))
    .finally(() => setNewThought(''))
  }

const handleLikeIncrease = (thoughtId) => {
  const options = {
      method: 'POST', 
    }

  fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, options)
    .then((res) => res.json())
    .then((data) => { 

const updatedThoughts = thoughts.map(item => {
  if (item._id === data._id) {
      item.hearts += 1;
      return item;
  } else {
      return item;
        }
      })
  
  setThoughts(updatedThoughts)
  })}


return (
    <div className='container'>
  
    


    <ThoughtForm 
    onFormSubmit={handleFormSubmit} 
    newThought={newThought} 
    setNewThought={setNewThought}/>

    

    {thoughts.map((thought) => (
    <ThoughtItem key={thought._id} 
    thought={thought} 
    onLikeIncrease={handleLikeIncrease} />
    ))}


  </div>
   
  )
}
