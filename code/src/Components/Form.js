import React, { useState, useEffect } from 'react'
import { Button } from './Button'

import './form.css'

export const Form = () => {
  const [message, setMessage] = useState('')


  return(
      <form className="form-card">      
          <label className="form-question">What's making you happy right now?</label>
          <input 
            type="text"
            name="happy-thought"
            className="text-box"
            onChange={(event) => setMessage(event.target.value)}>
          </input>
      
        

        <Button message={message} setMessage={setMessage} />
      </form>
      

    
  )
} 