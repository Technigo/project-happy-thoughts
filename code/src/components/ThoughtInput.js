import React from "react";

export const ThoughtInput = ({ onFormSubmit, newThought, setNewThought }) => {
	return (
		<form onSubmit={onFormSubmit}>
			return(
			<label>Type your thought</label>
			<textarea
				name="newThought"
				type="text"
				rows="5"
				columns="150"
				value={newThought}
				onChange={(e) => {
					setNewThought(e.target.value);
				}}
			></textarea>
			<button type="submit">&hearts; Send Happy Thought! &hearts;</button>
		</form>
	);
};
