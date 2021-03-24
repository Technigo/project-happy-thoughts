import React from 'react'

const Form = ( {onFormSubmit, messageNew, onMessageNewChange, characters } ) => {

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label htmlFor="newMessage">What's making you happy right now?</label>
      <textarea
        id="newMessage"
        name="form-message"
        value={messageNew}
        onChange={onMessageNewChange}
      />
      <small className="counter">{characters} / 140 characters</small>
      <button className="submit-button" type="submit"><span>&#10084;&#65039;</span> Send Happy Thought <span>&#10084;&#65039;</span></button>
    </form>
  )
}

export default Form