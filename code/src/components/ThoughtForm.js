import React from 'react';

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
	return (
		<form className="question-form" onSubmit={onFormSubmit}>
			<label htmlFor="newThought"> What's making you happy right now?</label>
			<textarea
				id="newThought"
				type="textarea"
				maxLength="140"
				value={newThought}
				onChange={(e) => setNewThought(e.target.value)}
			>
				{' '}
			</textarea>

			<button
				className="thought-btn"
				disabled={newThought.length < 5}
				type="submit"
			>
				Send Happy Thought
			</button>
		</form>
	);
};

export default ThoughtForm;
