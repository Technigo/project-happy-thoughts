import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';

export const ThoughtForm = ({
  newThought,
  onNewThoughtChange,
  onFormSubmit,
  onThoughtLikeChange,
  thoughtLength
}) => {
  const [textColor] = useState('');
  // const [textColor, setTextColor] = useState('');
  // useEffect(() => {
  //   thoughtLength < 5
  //     ? setTextColor('red-text')
  //     : thoughtLength >= 140
  //     ? setTextColor('red-text')
  //     : setTextColor('');
  // });

  return (
    <div className="thought-wrapper gray-bg">
      <form onSubmit={onFormSubmit} className="thought-form">
        <label htmlFor="thought-input" className="post-thought-question">
          What´s making you happy right now?
          <input type="" name="" />
        </label>
        <textarea
          id="thought-input"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Type your thoughts here..."
          maxLength="140" />
        <p className={`add-thought-word-count ${textColor}`}>
          {thoughtLength} / 140
        </p>
        <button
          type="submit"
          className="submit-btn"
          onChange={onThoughtLikeChange}>
          Send happy thoughts
        </button>
      </form>
    </div>
  );
}