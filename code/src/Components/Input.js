import React from "react";

const Input = ({ message, onInputChange, onFormSubmit} ) => {
  return (
    <header>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="thoughtInput" aria-label="thoughtInput">What's making you happy right now?</label>
            <h3>What's making you happy right now?</h3>
            <textarea 
            value={message} 
            onChange={onInputChange}
            placeholder="Week 11 is making me happy!"
            />
            <button className="form-button" type="submit">
              <span role="img" aria-label="like-emoji">💖</span>
                Send happy thought
              <span role="img" aria-label="like-emoji">💖</span>
            </button>
        </form>
    </header>
  )
}

export default Input;