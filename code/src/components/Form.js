import React from 'react'

const Form = ( {onFormSubmit, messageNew, onMessageNewChange, characters } ) => {

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label className="form-heading" htmlFor="newMessage">What's making you happy right now?</label>
      <textarea
        className="new-message"
        id="newMessage"
        name="form-message"
        value={messageNew}
        onChange={onMessageNewChange}
      />
      <small className="counter">{characters} / 140 characters</small>
      <button className="submit-button" type="submit">
        <span role="img" aria-label="Heart" className="heart-icon">❤️</span>
         Send Happy Thought 
        <span role="img" aria-label="Heart" className="heart-icon">❤️</span>
      </button>
    </form>
  )
}

export default Form