import React from "react";


const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
return (
<div>
<form onSubmit={onFormSubmit}>
  <label htmlFor="newThought">What's your happy thought? </label>
    <input
      id="newThought"
      type="text"
      value={newThought}
      onChange={(e) => setNewThought(e.target.value)}
    />
  <button type="submit"><span role="img" aria-label="heart">💓Send my Happy Thought!💓</span></button>
</form>
</div>)
};

export default ThoughtForm;