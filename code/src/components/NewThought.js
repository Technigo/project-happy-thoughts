import React from 'react';
import './newthought.css';

const NewThought = ({ onFormSubmit, newThought, onInputChange }) => {
  return (
    <form className="new-thought" onSubmit={onFormSubmit}>
      {' '}
      <p> What's making you happy right now?</p>
      <textarea
        className="new-message"
        row="5"
        value={newThought}
        onChange={onInputChange}
      ></textarea>
      <div className="submit-container">
        <button
          className="submit-button"
          type="submit"
          disabled={newThought.length < 5 || newThought.length > 140}
          style={{
            background:
              newThought.length < 5 || newThought.length > 140
                ? '#d0d0d0'
                : '#ffadad',
            pointerEvents:
              newThought.length < 5 || newThought.length > 140
                ? 'none'
                : 'auto',
            opacity: newThought.length < 5 || newThought.length > 140 ? '0.3' : '1'
          }}
        >
          <span role="img" aria-label="Heart">
            ❤️
          </span>
          {'  '}Send Happy Thought!
          <span role="img" aria-label="Heart">
            ❤️
          </span>
        </button>
        <div className="counter-container">
          <p style={{ color: newThought.length > 140 ? 'red' : 'green' }}>
            {newThought.length <= 140
              ? newThought.length
              : 140 - newThought.length}
          </p>
          <p>/140</p>
        </div>
      </div>
    </form>
  );
};

export default NewThought;
