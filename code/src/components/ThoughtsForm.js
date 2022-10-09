import React from 'react';

const ThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <section className="formWrapper">
      <div className="formContainer">
        <form onSubmit={onFormSubmit}>
          <h1>What´s making you happy right now?</h1>
          <textarea className="textArea" value={newThought} onChange={onNewThoughtChange} />
          <button className="thoughtButton" type="submit"> ❤️ Send happy thought ❤️ </button>
        </form>
      </div>
    </section>
  )
}

export default ThoughtsForm;