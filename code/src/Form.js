import React, { useState } from "react"
import { ReactComponent as Heart } from "./heart3.svg"
import "./form.css"

export const Form = () => {
  const [form, setForm] = useState()

  return (
    <div className='formContainer'>
      <form>
        <label for='inputField'>What's making you happy right now?</label>
        <input
          id='inputField'
          type='text'
          onChange={event => setForm(event.target.value)}
          value={form}
        />
      </form>
      <button className='submitButton'>
        <Heart className='heart' />
        Send Happy Thought!
        <Heart className='heart' />
      </button>
    </div>
  )
}
