import React, { useState } from "react"

const LIKES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const InputCard = () => {
  const [newThought, setNewThought] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(LIKES_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then(() => {
        window.location.reload()
      })
  }

  return (
    <form onSubmit={handleSubmit} className="input-card">
      <p className="input-card-title">What's making you happy right now?</p>
      <textarea
        type="text"
        maxLength="140"
        onChange={(event) => setNewThought(event.target.value)} />
      <p className="text-counter"
         style={{color: newThought.length > 130 ? "red" : "black"}}
      > 
      {140 - newThought.length} x characters left 
      </p>

      <button 
        className="input-card-button" 
        type="submit"
        disabled={newThought.length < 6 || newThought.length > 140 ? true : false}
      >
        <span role="img" aria-label="heart">&#10084;&#65039; </span>
        Send Happy Thoughts
        <span role="img" aria-label="heart"> &#10084;&#65039;</span>
      </button>
    </form>
  )

};