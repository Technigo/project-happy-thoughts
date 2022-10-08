import React from 'react';

/* ThoughtForm component, where new thoughts are handled and printed.
  The submit button is "unclickable" unless the user types 5+ characters, and a maximum of 140 char
  if its under 5 or more then 140 characters the "erros-msg" will show, and it tells the user
  whats causing them the "error"  */

const ThoughtForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form className="form-parent" onSubmit={onFormSubmit}>
      <div className="form-container">
        <div className="form-input">
          <h2 className="sub-header">Whats making you <span className="h2-animation">happy</span> right now?</h2>
          <textarea value={newTodo} onChange={onNewTodoChange} className="input-text" type="text" placeholder="What makes you happy today..." />
        </div>
        <div className="submit-container">
          <button className="submit-btn" disabled={newTodo.length < 5 || newTodo.length > 140} type="submit"><span className="heart" role="img" aria-label="heart">❤️</span> Send Happy Thought <span className="heart" role="img" aria-label="heart">❤️</span></button>
          {(newTodo.length > 0 && newTodo.length < 5) && <><p className="error-msg">Minimum: 5 characters</p><p className="error-msg">Maximum: 140 characters</p></>}
        </div>
      </div>
    </form>
  )
}

export default ThoughtForm;