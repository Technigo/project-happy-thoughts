import React, { useState } from 'react';

export const HappyForm = props => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(message)
    setMessage("")
  }
  return ( 
    <form className = "happy-form">
      <h2>Post a happy thought!</h2>
      <textarea rows="3"
      onChange={event => setMessage(event.target.value)}>
      </textarea>
      <div className="form-footer">
        <button className="happy-button"
        type="submit"
        onClick={handleSubmit}
        disabled={message.length < 6 || message.length > 140 ? true : false}>
          <span role="img" aria-lable="Heart">
            {"❤️"}
          </span>
        </button>
        <p> {message.length}/140 </p>
      </div>
    </form>
  )
}