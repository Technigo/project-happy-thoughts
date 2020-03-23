import React, { useState, useEffect } from 'react'

  // An input text field
  // A Submit button
  // A submit function that POSTs the text field
  // Change STATE to send to backend
  
// MESSAGE FORM FOR POSTING TO API:
export const MessageInputForm = () => {
  const apiURL = 'https://technigo-thoughts.herokuapp.com/'
  const [message, setMessage] = useState("")

  // FUNCTION FOR SUBMIT:
  const handleSubmit = (event) => {
    // PREVENT REFRESH OF PAGE
    event.preventDefault()

    fetch(apiURL, 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message })
        }
    // Refresh page after submit:
    ).then(() => {
      window.location.reload()
    })

  }


  return  (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        className="form-text"
        onChange={(event) => setMessage(event.target.value)}
        >
      </input>
      <input
        type="submit"
        className="form-button"
        value="Add Message">
      </input>

    </form>
  )
}