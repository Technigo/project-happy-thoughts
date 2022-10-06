import React from 'react';

const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form className="messageForm" onSubmit={onFormSubmit}>
      <h3>What is making you happy right now?</h3>
      <textarea className="textArea" value={newTodo} onChange={onNewTodoChange} />
      <button className="formBtn" type="submit">❤️ Send Happy Thought! ❤️</button>
    </form>
  )
}

export default TaskForm;