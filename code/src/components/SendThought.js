import React from 'react';

export const SendThought = () => {
	return (
		<section className="send-thought-container">
			<p>What's making you happy right now?</p>
			<form>
				<textarea
					className="thought-input"
					name="thought"
					type="text"
					placeholder="Write your happy thought..."
				/>
				<input className="two-hearts-button" type="button" value="❤️ Send Happy Thought ❤️" />
			</form>
		</section>
	);
};
