import React from "react";


const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
return (
<div>
  <form className="form" onSubmit={onFormSubmit}>
    <label className="label" htmlFor="newThought">What's your happy thought? </label>
      <input
        className="new-thought"
        id="newThought"
        type="text"
        minlength="5"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
    <button className="send-thought-button" type="submit">
      <span role="img" aria-label="heart">💓</span>
        Send my Happy Thought!
      <span role="img" aria-label="heart">💓</span>
    </button>
  </form>
</div>)
};

export default ThoughtForm;