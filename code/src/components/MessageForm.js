import React, { useState } from 'react'
import { messageList } from 'components/MessageList'
import ('form.css')


export const MessageForm = () => {
  //the message state to send to the backend
  const APImessages = 'https://technigo-thoughts.herokuapp.com/'
  const [message, setMessage] = useState("")


  //A submit function wich Posts the input field
  const handleSubmit = (event) => {
    //Prevent the page refresh
    event.preventDefault()
    //send a POST request using the message state
    fetch(APImessages,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ message: message })
      }
    ).then(() => {
      //Ask this page to refresh
      window.location.reload()
    })


  }

  return (
    //An input text field
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        className="input-text"
        onChange={event => setMessage(event.target.value)}
      >
      </input>

      {/* A submit button */}
      <input
        type="submit"
        value="🌈 Send a happy thought 🐶"
        className="button">
      </input>

    </form>


  )
}