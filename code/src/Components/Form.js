import React from 'react'

import './form.css'

export const Form = () => {
  return(
    <form className="form-card">
      <label>What's making you happy right now?</label>
      <input type="text" name="happy-thought"></input>
    </form>
  )
} 