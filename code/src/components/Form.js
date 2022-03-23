import React from "react";

const Form = ({ onNewThoughtChange, newThought, onFormSubmit }) => {
    
  return (
    <div>
      <form onSubmit={onFormSubmit}>
          <label htmlFor="happythoughts">Write a happy thought!</label>
          <textarea value={newThought} id="happythoughts" onChange={onNewThoughtChange} />
          <button type="submit">Send happy thought</button>
      </form>
    </div>
  )
}

export default Form;