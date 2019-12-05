import React, { useState } from 'react'

export const HappyForm = ({onFormSubmit}) => {
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    onFormSubmit(message)
  }

  return (
    <div className="question-card">
    <form>
      {!error &&(<h3>What is making you happy right now?</h3>)}
      {error &&(<h3 className="required">Please write between 5 and 140 characters</h3>)}
      
      <label>
      <textarea 
        rows="3"
        value={message}
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      </label>

      <button 
        className="send-form"
        type="submit"
        onClick={handleSubmit}
      >
      ❤️ Send Happy Thought ❤️
      </button>
    </form>
    </div>
  )
}


// {!error &&(<p className="question">What is making you happy right now?</p>)}
// {error &&(<p className="required">Please write between 5 and 140 characters</p>)}
