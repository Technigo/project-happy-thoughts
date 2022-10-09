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
        onChange={onNewTodoChange} />
      {/* Assigned value allows us to for example clear area */}
      <button
        className="thoughtsBtn"
        type="submit">❤️ Send Happy Thought ❤️
      </button>
      {/* type "submit" listens to the onFormSubmit */}
    </form>
  )
}

export default TaskForm;