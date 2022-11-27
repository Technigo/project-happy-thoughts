import React from 'react';

const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form
      onSubmit={onFormSubmit}
      className="taskForm">
      <h1 className="thoughtsHeading">What is making you happy right now?</h1>
      <textarea
        className="thoughtsTextArea"
        value={newTodo}
        onChange={onNewTodoChange}
        type="text"
        maxLength="140"
        placeholder="Insert happy thoughts here <3" />

      <p className="maxLength">{140 - newTodo.length} characters left</p>
      <button
        className="thoughtsBtn"
        type="submit">❤️ Send Happy Thought ❤️
      </button>
    </form>
  )
}

export default TaskForm;