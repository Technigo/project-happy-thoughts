import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <div className="thought-wrapper">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">Type your thought</label>
        <input className="inputfield" id="newThought" type="text" value={newThought} onChange={(e) => setNewThought(e.target.value)} maxLength="140" placeholder="Type Here...." />
        <p> {newThought.length}/ 140</p>

        <button className="ThoughtButton" disabled={newThought.length < 5} type="submit" onClick={() => window.location.reload(false)}>
          💖 Send happy thought! 💖
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
