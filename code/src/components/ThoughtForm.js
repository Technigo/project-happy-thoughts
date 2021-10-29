import React from 'react';

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
	return (
		<form className="question-form" onSubmit={onFormSubmit}>
			<label htmlFor="newThought" className="form-title">
				What's making you happy right now?
			</label>
			<textarea
				row="5"
				cols="50"
				id="newThought"
				type="textarea"
				maxLength="140"
				value={newThought}
				onChange={(e) => setNewThought(e.target.value)}
				placeholder="Write your happy thoughts here..."
			></textarea>
			<div className="form-bottom-wrapper">
				<button
					className="thought-btn"
					disabled={newThought.length < 5}
					type="submit"
				>
					<span role="img" aria-label="Heart emoji">
						&#128151;
					</span>
					Send Happy thought
					<span role="img" aria-label="Heart emoji">
						&#128151;
					</span>
				</button>
				<p
					className="text-counter"
					style={{ color: newThought.length > 130 ? 'red' : 'green' }}
				>
					{140 - newThought.length} characters left
				</p>
			</div>
		</form>
	);
};

export default ThoughtForm;
