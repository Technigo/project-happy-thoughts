/* eslint-disable linebreak-style */
import React from 'react';

const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h2>Welcome to Happy Thoughts! Type another Happy Thought</h2>
      <textarea value={newTodo} onChange={onNewTodoChange} />
      <button type="submit">Submit form</button>
    </form>
  )
}

export default TaskForm;