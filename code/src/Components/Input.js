import React from "react";

const Input = ({ message, onInputChange, onFormSubmit} ) => {

  return (
    <header>
      <label htmlFor="thoughtInput" aria-label="thoughtInput"/>
      <form onSubmit={onFormSubmit}>
        <h4>What's making you happy right now?</h4>
        <textarea 
          value={message} 
          onChange={onInputChange}
          placeholder="Week 11 is making me happy!"
          />
        <button className="form-button" type="submit">💖Send happy thought💖</button>
      </form>
    </header>
  )
}

export default Input;