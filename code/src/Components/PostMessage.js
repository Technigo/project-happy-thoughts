import React, { useState } from 'react';
import Button from './Button';
//import moment from 'moment'; //to format the date
import './Style.css';

const PostMessage = () => {
	const MESSAGE_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
	const [message, setMessage] = useState(''); //post a single message (a happy message)
	//const [name, setName] = useState('');
	//const [isLoading, setLoading] = useState(true); //to show a loading circle when waiting for the message posted

	// a submit function witch POSTs the text input
	const handleSubmit = event => {
		event.preventDefault();

		//send a POST request
		fetch(MESSAGE_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message }),
		})
			.then(() => {
				setMessage(''); //clear form when submitting form
				//setName('');
				//to make the page reload
				window.location.reload();
			})
			.catch(error => console.log('error', error));
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* <label>
				What's your name?
				<input
					type="text"
					placeholder="Type your name..."
					onChange={event => setName(event.target.value)}
					value={name}
				/>
			</label> */}
			<label className="post-input">
				<h1>What's making you happy right now?</h1>
				<textarea
					rows="4"
					className="post-message"
					//value={message}
					placeholder="Type your happy thought...."
					onChange={event => setMessage(event.target.value)}
				/>
			</label>
			{/* <div className="post-message-wrapper"> */}
			<Button
				className="button-send-post"
				type="submit"
				text={
					<p>
						<span className="heart-post" role="img" aria-label="Heart">
							{'❤️ '}
						</span>
						Post happy thought
						<span className="heart-post" role="img" aria-label="Heart">
							{' ❤️'}
						</span>
					</p>
				}
				disabled={message.length < 6 || message.length > 140 ? true : false}
			/>
			{/* add a tooltip? To indicate that the message is to long or to short */}
			<p className="post-message-length">
				<span
					className={
						message.length < 6 || message.length > 140
							? 'wrongLength'
							: 'goodLength'
					}
				>
					<strong>{140 - message.length}</strong>
				</span>
				/ 140
			</p>
			{/* </div> */}
		</form>
	);
};

export default PostMessage;

// import React, { useEffect, useState } from 'react';
// import moment from 'moment';

// const HappyForm = props => {
// 	const [messages, setMessages] = useState([]);
// 	const MESSAGE_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';

// 	useEffect(() => {
// 		//fetch from backend API
// 		fetch(MESSAGE_URL)
// 			.then(response => {
// 				return response.json();
// 			})
// 			//Set the state, data is an array of messages
// 			.then(data => {
// 				setMessages(data);
// 				console.log(data);
// 			});
// 	}, []);

// 	return (
// 		<div className="message-text">
// 			{messages.map(post => (
// 				<p>
// 					{post.message}
// 					<span>{moment(post.createdAt).fromNow()}</span>
// 				</p>
// 			))}
// 		</div>
// 	);
// };

// export default HappyForm;
