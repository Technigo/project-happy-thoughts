import React from 'react';

const CreateThoughts = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>What&apos;s making you happy right now?</h1>
      <textarea value={newTodo} onChange={onNewTodoChange} />
      <button type="submit">Send Happy Thought</button>
    </form>
  );
};

export default CreateThoughts;
