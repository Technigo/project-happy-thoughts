import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
	return (
		<form className="form-container" onSubmit={onFormSubmit}>
			<label className="main-question" htmlFor="newThought">What's making you happy right now?</label>
			<input className="answer"
				id="newThought"
				type="text"
				placeholder="Share your happy thoughts💕"
				value={newThought}
				onChange={(e) => 
					setNewThought(e.target.value)}
			/>
			<button className="send-button" disabled={newThought.length < 5} type="submit">
				💖Send Happy Thought💖
			</button>
		</form>
		
	);
};

export default ThoughtForm;
