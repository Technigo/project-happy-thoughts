import React, { useState } from 'react';
import { MessageCount } from './MessageCount';

export const SendThought = ({ thoughts, setThoughts }) => {
	const [ message, setMessage ] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();

		fetch('https://technigo-thoughts.herokuapp.com/', {
			method  : 'POST',
			body    : JSON.stringify({ message: message }),
			headers : { 'Content-Type': 'application/json' }
		})
			.then((res) => res.json())
			.then((newThought) => {
				setThoughts((previousThoughts) => [ newThought, ...previousThoughts ]);
			});
		//Clears textarea after message is sent
		setMessage('');
	};

	// Does not allow empty (only space) messages
	const isMessageEmpty = (value) => value.replace(/\s/g, '').length === 0;

	return (
		<section className="send-thought-container">
			<p className="p-header">What's making you happy right now?</p>
			<form>
				<textarea
					className="thought-input"
					onChange={(event) => {
						setMessage(event.target.value);
					}}
					name="thought"
					type="text"
					placeholder="Write your happy thought..."
					value={message}
				/>
				<div className="btn-and-count-container">
					<input
						onClick={handleFormSubmit}
						className="two-hearts-button"
						type="button"
						value="❤️ Send Happy Thought ❤️"
						disabled={message.length < 5 || message.length > 140 || isMessageEmpty(message)}
					/>
					<MessageCount charCount={message.length} />
				</div>
			</form>
		</section>
	);
};
