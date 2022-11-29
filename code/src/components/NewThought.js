/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const NewThought = ({ handleFormSubmit, onNewThoughtChange, newThought }) => {
  return (
    <section className="new-thought-container">
      <form onSubmit={handleFormSubmit} className="inner-container">
        <h2 className="happy-question">What&apos;s making you happy today?</h2>
        <div className="text-area-wrapper">
          <textarea
            className="text-area"
            value={newThought}
            onChange={onNewThoughtChange}
            placeholder="Write it here"
            rows="2" />
          <button
            className="send-btn"
            type="submit"
            onClick=""
            disabled={newThought.length < 5 || newThought.length > 140}>
          ❤️Send your Happy Thought❤️
          </button>
        </div>
        <p className={newThought.length === 140 ? 'red-font' : 'normal-font'}>{140 - newThought.length} /140 characters left to type</p>
      </form>
    </section>
  );
}

export default NewThought;