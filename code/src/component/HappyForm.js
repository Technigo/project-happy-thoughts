import React, { useState, useEffect } from 'react';

export const HappyForm = onFormSubmit => {
	const [message, setMessage] = useState('');

	const handleSubmit = event => {
		event.preventDefeault();
		onFormSubmit(message);
	};

	return (
		<form>
			<h3>Post a happy thought</h3>
			<p>{message}</p>
			<textarea
				rows='3'
				onChange={event => setMessage(event.target.value)}
			></textarea>
			<button
				type='submit'
				onClick={handleSubmit}
				disabled={message.length < 6 && message.length > 140 ? true : false}
			>
				send a happy thought
			</button>
		</form>
	);
};
