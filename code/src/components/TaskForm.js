/* eslint-disable linebreak-style */
import React from 'react';

const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit} className="form-container">
      <h2 className="form-headline">What&apos;s making you happy right now?</h2>
      <textarea className="form-textarea" type="text" id="label-id" value={newTodo} onChange={onNewTodoChange} />
      <button type="submit" className="form-submit-button" disabled={newTodo.length < 6 || newTodo.length > 140}>
        <img src="https://img.icons8.com/emoji/48/000000/red-heart.png" alt="like" className="form-submit-button-image" />
        <span>&nbsp; Send Happy Thought &nbsp;</span>
        <img src="https://img.icons8.com/emoji/48/000000/red-heart.png" alt="like" className="form-submit-button-image" />
      </button>
    </form>
  )
};

export default TaskForm;