import React, { useEffect, useState } from 'react'
import ThoughtForm from './components/ThoughtForm'
import ThoughtItem from './components/ThoughtItem'
import HappyLoading from './components/HappyLoading';

const HAPPY_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
const LIKES_URL = (thoughtId) =>  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

export const App = () => {

  const [thoughts, setThoughts] = useState ([])
  const [newThought, setNewThought] = useState ('')
  const [newName, setNewName] = useState ('')
  const [loading, setLoading] = useState(false);


  useEffect(()=> {
    fetchThoughts()
  }, [])

  // The first fetch request to fetch and display the 20 most current messages
  const fetchThoughts =() => {
    setLoading(true)
    fetch (HAPPY_API)
    .then ((res) => res.json ())
    .then ((data) => setThoughts(data))
    .finally(() => setLoading(false));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault ()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought, name: newName }),
    }

    fetch(HAPPY_API, options)
    .then((res) => res.json())
    .then((data) => {
      fetchThoughts()
      setNewThought("") // This clears the textarea for a new input
      setNewName("") // This clears the name input
    })
    
  }

  const handleLikesIncrease = (thoughtId) => {
    
    const options = {
      method: 'POST'
    }
      fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {

        fetchThoughts()
      })
    }

  return (
    <div className="body">
      {loading && <HappyLoading />}
      <h1>A PLACE FOR EVERYONES HAPPY THOUGHTS</h1>
        <ThoughtForm
        onFormSubmit = {handleFormSubmit}
        newThought = {newThought}
        setNewThought = {setNewThought}
        newName = {newName}
        setNewName = {setNewName}/>
      
      {thoughts.map(thought => (

       <ThoughtItem 
       key={thought._id}
       thought = {thought}
       onLikesIncrease = {handleLikesIncrease}/>
      ) 
      )}
    </div>
  )
}
