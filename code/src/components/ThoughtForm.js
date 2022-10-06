import React from 'react';

const ThoughtForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1 className="header">Happy thought</h1>
      <div className="form-container">
        <div className="form-input">
          <textarea value={newTodo} onChange={onNewTodoChange} />
        </div>
        <div className="submit-container">
          <button className="submitBtn" disabled={newTodo.length < 5 || newTodo.length > 140} type="submit"><span className="heart" role="img" aria-label="heart emoji">❤️</span> Send Happy Thought <span className="heart" role="img" aria-label="heart emoji">❤️</span></button>
        </div>
      </div>
    </form>
  )
}

export default ThoughtForm;