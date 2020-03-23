import React, {useState} from 'react'
import { classBody } from '@babel/types'

export const MessageInput = () => {
  const MESSAGE_URL = "https://technigo-thoughts.herokuapp.com/"

  const [message,setMessage]= useState ("")
const  handleSubmit = event =>{
  event.preventDefault()
  
  fetch(MESSAGE_URL,
    {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({message: message})
    }
    ).then(()=>{
      window.location.reload()
    })
}

return(
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    className="form-message"
      onChange={event => setMessage(event.target.value)}>
    </input>
    <input
    type="submit"
    className="form-button"
    value="Add Message">
    </input>
  </form>
)
}