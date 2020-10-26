import React, { useState } from 'react'

export const NewPost = () => {
  const post_url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [thought, setThought] = useState([])

  const handleSubmit = event => {
    event.preventDefault()
    
    fetch(post_url, 
      {
        method:'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ message: thought })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <form
      onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={event => setThought(event.target.value)}
        className="form-text">
      </input>
      <button 
        className="submit-button" 
        value="Add Thought">
        Submit
      </button>

    </form>
  )
}