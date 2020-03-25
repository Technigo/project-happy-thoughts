import React, {useState} from 'react'
import './MessageInput.css' 
import { classBody } from '@babel/types'

export const MessageInput = () => {
  const MESSAGE_URL = "https://technigo-thoughts.herokuapp.com/"
  const [message,setMessage]= useState ("")

  const  handleSubmit = event =>{
    event.preventDefault()
    fetch(MESSAGE_URL, {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({message})
    })
    .then(()=>{
      window.location.reload()
    })
}

return(
  <form className="MessageInput">
    <h3>Happy Post</h3>
    <textarea
    row='3'
    value={message}
    onChange={event => setMessage(event.target.value)}>
    </textarea>
    <button
    type='submit'
    onClick={handleSubmit}
    disabled={message.length < 6 || message.length > 140 ? true : false}
    >
      Send a Happy Post
    </button>
    <p>{message.length} /140</p>
  </form>
)
}