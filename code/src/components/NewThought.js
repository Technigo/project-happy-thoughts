import React, { useState, useEffect } from 'react'
import { Heart } from './Heart'
import './newthought.css'

export const NewThought = () => {

  const [newThought, setNewThought] = useState([])

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  // useEffect(() => {
  //   fetch("https://technigo-thoughts.herokuapp.com/", {
  //     method: 'POST', body: JSON.stringify({ message })
  //   })
  //     .then((res) => res.json())
  //     .then((newThought) => setNewThought(json))
  // })

  return (
    <div className="newthought-wrapper">
      <div className="newthought">
        <form onSubmit={handleFormSubmit} name="form">
          <div>What's making you happy right now?</div>
          <label>
            <textarea rows="4" cols="30" name="message" form="form" />
          </label>
          <button type="submit"><Heart /> Send happy thought <Heart /></button>
        </form>
      </div>
    </div>
  )
}