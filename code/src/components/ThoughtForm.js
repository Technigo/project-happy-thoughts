import React from 'react';
import "../components/ThoughtForm.css"

	//our form built in JS6

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
	return (
		<form className="happy-thought-form" onSubmit={onFormSubmit}>
			<label className="happy-header" htmlFor="newThought">What's making you happy right now?</label>
			<textarea className="happy-thought-textarea" 
				id="newThought"
				type="text"
				placeholder="Spread some happiness"
				value={newThought}
				onChange={(e) => setNewThought(e.target.value)}
			/>
			<button className="happy-thought-button" disabled={newThought.length < 6 || newThought.length > 140 ? true : false} type="submit">
			<span className="heart" role="img" arial-label="Heart">
              {"❤️ "}
            </span>Send Happy Thought <span className="heart" role="img" arial-label="Heart">
              {"❤️ "}
            </span>
			</button>
			<p className="characters">Min. 5 characters</p>
			<p className="thought-length">{newThought.length} / 140</p>
		</form>
	);
};

export default ThoughtForm;
