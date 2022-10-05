import React from 'react';

const UserInput = ({ handleNewThoughtChange, handleOnFormSubmit, newThought }) => {
  return (
    <section className="input wrapper">
      <form
        className="input card"
        onSubmit={handleOnFormSubmit}>
        <h1>What&apos;s making you happy right now?</h1>
        <textarea value={newThought} onChange={handleNewThoughtChange} />
        <button className="btn-send-input" type="submit">💗 Send Happy Thought 💗</button>
      </form>
    </section>
  )
}
export default UserInput;