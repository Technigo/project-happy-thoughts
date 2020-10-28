import React, { useState } from 'react';

export const Form = ({ onMessageChange }) => {
	const [newMessage, setNewMessage] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		onMessageChange(newMessage);
	};

	return (
		<div className="message-container form-container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="input-text">
					What's making you happy right now?
					<input
						className="happy-input-textarea"
						type="text-area"
						rows="3"
						value={newMessage}
						onChange={(event) => setNewMessage(event.target.value)}
					/>
				</label>
				<button
					className="submit-button"
					type="submit"
					disabled={
						newMessage.length < 6 || newMessage.length > 140 ? true : false
					}>
					<p className="submit-button-text">
						<span aria-label="heart emoji" role="img">
							&#10084;&#65039;
						</span>{' '}
						Send happy thought{' '}
						<span aria-label="heart emoji" role="img">
							&#10084;&#65039;
						</span>
					</p>
				</button>
			</form>
		</div>
	);
};
