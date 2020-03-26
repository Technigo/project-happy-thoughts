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
      //setMessage("")//resets the form to be empty
      //Ask this page to refresh
      window.location.reload()
    })
    .catch(err => console.log("error:",err))


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
      <div className="formContent">
      <button 
              className="button"
              type="submit"
              disabled={message.length < 6 || message.length >140 ? true : false}
              >
              <span>🌈Send a Happy Thought!🐶</span> 
      </button>
      <p className="letters-typed">{message.length} / 140</p>
      </div>
    </form>


  )
}