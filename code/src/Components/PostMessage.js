import React, { useState } from 'react';
import Button from './Button';
import moment from 'moment'; //to format the date

const PostMessage = () => {
	const MESSAGE_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
	const [message, setMessage] = useState(''); //post a single message (a happy message)

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
				setMessage('');
				//to make the page reload
				window.location.reload();
			})
			.catch(error => console.log('error', error));
	};

	return (
		<form onSubmit={handleSubmit}>
			<textarea
				rows="4"
				className="post-message"
				onChange={event => setMessage(event.target.value)}
			/>
			<Button type="submit" text="Post your message" />
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
