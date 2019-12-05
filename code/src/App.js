import React, { useState, useEffect } from 'react'
import { PostedThought } from 'PostedThought'
import './App.css'
import { NewThought } from 'NewThought'


export const App = () => {
  const [postedThought, setPostedThought] = useState([])
  const [newPostedThought, setNewPostedThought] = useState('')

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/', { method: 'GET' })
      .then(res => res.json())
      .then(json => setPostedThought(json))
  }, [newPostedThought])

  const handleFormSubmit = (newThought) => {
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message: newThought }), //Eventuellt ta bort message:?
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setNewPostedThought(newThought))
      .catch(err => console.log("error:", err))

  }

  return (
    <div>
      <NewThought
        onFormSubmit={handleFormSubmit}
      />
      {postedThought.map((props) => (
        <PostedThought
          key={props._id}
          // _id={props._id}
          message={props.message}
          hearts={props.hearts}
          createdAt={props.createdAt}
        />
      ))
      }


    </div>
  )
}
