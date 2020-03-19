import React from 'react'
import { Button } from './Button'

import './form.css'

export const Form = () => {
  return(
    <form className="form-card">
      <label className="form-question">What's making you happy right now?</label>
      <input 
        type="text"
        name="happy-thought"
        className="text-box">
      </input>

      <Button />
    </form>
  )
} 