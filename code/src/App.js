import React, { useState, useEffect } from 'react';

import { ThoughtsList } from './ThoughtsList';
import { Form } from './Form';
import { THOUGHTS_URL } from './urls';

export const App = () => {
	const [thoughts, setThoughts] = useState([]);

	useEffect(() => {
		fetchMessages();
	}, []);

	const fetchMessages = () => {
		fetch(THOUGHTS_URL)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				data.sort((a, b) => a.createdAt > b.createdAt);
				const filteredMessages = data.filter((item) => item.message);
				setThoughts(filteredMessages);
			});
	};

	const reachMessageInput = (newMessage) => {
		fetch(THOUGHTS_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: newMessage }),
		})
			.then(() => fetchMessages())
			.catch((error) => console.error(error));
	};

	const reachLikeInput = (newLike) => {
		fetch(
			'https://happy-thoughts-technigo.herokuapp.com/thoughts/{postId}/like',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
			}
		).then(() => fetchMessages());
	};

	return (
		<div className="list-container">
			<Form onMessageChange={reachMessageInput} />
			<ThoughtsList thoughtsList={thoughts} onLikeChange={reachLikeInput} />
		</div>
	);
};
