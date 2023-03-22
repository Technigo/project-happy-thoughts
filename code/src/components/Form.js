import React from 'react';

const Form = ({ text, setText, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>What is making you happy right now?</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Send happy thoughts!</button>
    </form>
  )
}

export default Form;