import React, { useState } from 'react'
import img from './media/pixel_heart.png'
import './HappyForm.css'

export const HappyForm = () => {
	const url = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
	const [message, setMessage] = useState('')

	// a submit function witch POSTs the text input
	const handleSubmit = event => {
		event.preventDefault()

		//send a POST request
		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message }),
		})
			.then(() => {
				setMessage('') // makes the text-area empy when reloaded
				window.location.reload() // this forces the page to reload - refresh the contnet without 
			}) //refreshing the page - how do we do that in a neat way?
	};

	return (
    <article className='form-wrapper'>
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
          className="submit-button"
					type="submit"
					disabled={message.length <= 5 || message.length > 140 ? true : false}
          >
            <img src={img} alt='Heart'></img>
            {/* <span className='button-heartemoji' role='img' aria-label='Heart'>
						{'❤️' }
					</span> */}
            Send a happy thought!
            {/* <span className='button-heartemoji' role='img' aria-label='Heart'>
						{'❤️' }
					</span> */}
          <img src={img} alt='Heart'></img>
          </button>
          <p>{message.length} /140 </p>
			</div>
		</form>
    </article>
	);
};