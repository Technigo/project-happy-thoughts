import React from "react";

export const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
	return (
		<form className="form-container" onSubmit={onFormSubmit}>
			<label htmlFor="newThought">What's making you happy right now?</label>
			{/*prettier-ignore*/}
			<textarea
        className="input-field"
        id="newThought"
        name="happy-thought"
        rows="3"
        cols="50" // Change this
        // wrap="hard"
        value={newThought} onChange={(event) => setNewThought(event.target.value)}>
      </textarea>
			<button className="submit-btn" disabled={newThought.length < 5} type="submit">
				<span role="img" className="heart-icon" aria-label="heart icon">
					❤️
				</span>
				<span className="btn-text">Send Happy Thought</span>
				<span role="img" className="heart-icon" aria-label="heart icon">
					❤️
				</span>
			</button>
		</form>
	);
};
