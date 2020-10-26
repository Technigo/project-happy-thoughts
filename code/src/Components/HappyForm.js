import React, { useState } from 'react'
import './HappyForm.css'

export const HappyForm = () => {
	const url = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
	const [message, setMessage] = useState('')

	// a submit function witch POSTs the text input
	const handleSubmit = event => {
		event.preventDefault();

		//send a POST request
		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message }),
		})
			.then(() => {
				setMessage('')
				window.location.reload();
			})
			.catch(error => console.log('error', error));
	};

	return (
		<form onSubmit={handleSubmit}>
				<h1>What's making you happy right now?</h1>
				<textarea
        className="post-message"
          rows="4"
          value={message}
					onChange={event => setMessage(event.target.value)}
				/>
			<div className="post-message-wrapper">
				<button
					type="submit"
					disabled={message.length < 5 || message.length > 140 ? true : false}>
            Send halp
          </button>
          <p>{message.length}/140 </p>
			</div>
		</form>
	);
};