import React from "react";

export const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
	return (
		<form className="form-container" onSubmit={onFormSubmit}>
			<label htmlFor="newThought">What's making you happy right now?</label>
			{/*prettier-ignore*/}
			<input
        className="input-field"
        id="newThought" type="text"
        value={newThought} onChange={(event) => setNewThought(event.target.value)}>
      </input>
			<button className="submit-btn" disabled={newThought.length < 5} type="submit">
				<span className="heart-icon" aria-label="heart icon">
					❤️
				</span>
				<span className="btn-text">Send Happy Thought</span>
				<span className="heart-icon" aria-label="heart icon">
					❤️
				</span>
			</button>
		</form>
	);
};
