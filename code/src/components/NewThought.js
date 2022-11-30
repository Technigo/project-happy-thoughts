/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const NewThought = ({ handleFormSubmit, onNewThoughtChange, newThought }) => {
  return (
    <section className="new-thought-container">
      <form onSubmit={handleFormSubmit} className="inner-container">
        <h2>What&apos;s making you happy today?</h2>
        <textarea
          className="text-area"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Write it here"
          rows="2" />
        <div className="text-area-wrapper">
          <button
            className="send-btn"
            type="submit"
            onClick=""
            disabled={newThought.length < 5 || newThought.length > 140}>
          ❤️ Send Happy Thought ❤️
          </button>
          <p className="counter" {...newThought.length === 140 ? 'red-font' : 'normal-font'}>{140 - newThought.length} /140 left</p>
        </div>
      </form>
    </section>
  );
}

export default NewThought;