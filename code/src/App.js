import React, { useState, useEffect } from 'react'


import { ThoughtForm } from 'components/ThoughtForm'
import { ThoughtItem } from 'components/ThoughtItem'
import { LoadingItem } from 'components/LoadingItem'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import  { API_URL } from './utils/urls'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState(false)



  useEffect( () =>{
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    setLoading(true)
    fetch(API_URL)
    .then(res=>res.json())
    .then(data=>setThoughts(data))
    .finally(()=>setLoading(false))
  }


  const checkKey = (event) => {
    if (event.keyCode === 13 && !event.shiftKey){
        handleFormSubmit(event)
    }
}

  const handleFormSubmit = (event) =>{
    event.preventDefault()

    const options = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message: newThought}),
    }

    fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => {
      fetchThoughts()
    })
    setNewThought("");
    
}


  return (
    <div>
    <Header />
    <main className="mainContainer">
      {loading && <LoadingItem />}
      <ThoughtForm 
        onFormSubmit={handleFormSubmit} 
        checkKey ={checkKey}
        newThought={newThought} 
        setNewThought={setNewThought} />

      {thoughts.map((thought) => (
        <ThoughtItem 
          key={thought._id}
          thought={thought}
          fetchThoughts={fetchThoughts}
          />
         
      ))}
      <Footer />
    </main>
    </div>
  )
}
