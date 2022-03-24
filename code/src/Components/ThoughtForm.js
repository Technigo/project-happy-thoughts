import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  // const [postable, setPostable] = useState(false);

  // "TENERARY COndition"  GOOGLE IT!!
  // postable = newThought.length > 5 && newThought.length < 140;

  // if (postable) {
  //   return true
  // } else {
  //   return false
  // }

  return (
    <form className="form card" onSubmit={onFormSubmit}>
      <label htmlFor="newThought">What is making you happy right now?</label>
      <textarea
        id="newThought"
        type="text"
        rows="5"
        columns="150"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
        placeholder="Write your happy thought here..."
      />

      <button
        className="submit-button"
        type="submit"
        disabled={newThought.length < 5 || newThought.length > 140}
      >
        <span role="img" aria-label="heart">
          &#10084;&#65039;
        </span>{" "}
        Send Happy Thought{" "}
        <span role="img" aria-label="heart">
          &#10084;&#65039;
        </span>
      </button>
      <p>{0 + newThought.length}/140</p>
    </form>
  );
};

export default ThoughtForm;
