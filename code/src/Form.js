import React, { useState } from "react"
import { ReactComponent as Heart } from "./heart3.svg"
import "./form.css"

export const Form = props => {
  const [message, setMessage] = useState("")

  return (
    <div className='form'>
      <label htmlFor='inputField'>What's making you happy right now?</label>
      <input
        id='inputField'
        type='text'
        onChange={event => setMessage(event.target.value)}
        value={message}
      />
      <button
        onClick={() => {
          props.postThoughtToAPI(message)
        }}
        className='submitButton'
      >
        <Heart className='heart' />
        Send Happy Thought!
        <Heart className='heart' />
      </button>
    </div>
  )
}
