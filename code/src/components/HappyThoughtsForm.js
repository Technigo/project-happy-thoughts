import React from 'react';

const HappyThoughtsForm = ({ newHappyThought, setNewHappyThought }) => {
  const onFormSubmit = (event) => event.preventDefault();

  const onNewThoughtChange = (event) => {
    setNewHappyThought(event.target.value);
  };

  return (
    <div className="thoughtform-container">
      <form className="thoughtsForm" onSubmit={onFormSubmit}>
        <p className="form-title">Spread some joy! Post your happy thoughts below</p>
        <textarea
          value={newHappyThought}
          onChange={onNewThoughtChange}
          placeholder="For example, how many dogs did you pet today?" />
        <button
          className="submit-btn"
          type="submit"
          disabled={newHappyThought.length < 5 || newHappyThought.length > 140}>
          Send thought <span role="img" aria-label="heart-emoji">❤️‍🔥</span>
        </button>
      </form>
    </div>
  );
};

export default HappyThoughtsForm;