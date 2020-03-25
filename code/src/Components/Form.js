import React, { useState } from 'react'
import { Button } from './Button'

import './form.css'

export const Form = () => {
  const [message, setMessage] = useState('')


  return(
      <form className='form-card'>      
          <label className='form-question'>What's making you happy right now?</label>
          <textarea 
            value={message}
            type='text'
            name='happy-thought'
            maxLength='140'
            className='text-box'
            onChange={(event) => setMessage(event.target.value)}>
          </textarea>
      
        <Button message={message}/>
      </form>
      

    
  )
} 