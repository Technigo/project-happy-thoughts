import React from 'react';

const UserInput = ({ handleNewThoughtChange, handleOnFormSubmit, newThought }) => {
  return (
    <section className="input wrapper">
      <form
        className="input card"
        onSubmit={handleOnFormSubmit}>
        <h1>What&apos;s making you happy right now?</h1>
        <textarea
          style={newThought.length > 140 ? { color: 'red' } : {}}
          value={newThought}
          onChange={handleNewThoughtChange}
          placeholder="Type your happy thought here" />
        <div className="counter">
          <p>
            {newThought.length}/140
          </p>
        </div>
        <button
          disabled={newThought.length < 6 || newThought.length > 140}
          className="btn-send-input"
          type="submit">
          💗 Send Happy Thought 💗
        </button>
      </form>
    </section>
  )
}
export default UserInput;