import React from 'react';

const TaskForm = ({ handleFormSubmit, onNewTaskChange, newTask }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Hi, please enter your task in the text-area</h2>
      <textarea value={newTask} onChange={onNewTaskChange} />
      <button type="submit">Submit your task</button>
    </form>
  );
}

export default TaskForm