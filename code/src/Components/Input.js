import React from "react";

const Input = ({ message, onInputChange, onFormSubmit} ) => {
  return (
    <header>
        <form onSubmit={onFormSubmit}>
            <h1>What's making you happy right now?</h1>
            <label htmlFor="thoughtInput" aria-label="thoughtInput">What's making you happy right now?</label>
            <textarea>
            value={message} 
            onChange={onInputChange}
            placeholder="Week 11 is making me happy!"
            </textarea>
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