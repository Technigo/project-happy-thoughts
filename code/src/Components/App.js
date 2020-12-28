import React, { useState, useEffect } from 'react';

import PostInput from './PostInput';
import PostList from './PostList';
import { MESSAGE_URL } from '../Urls';
import Loader from './Loader';

import './Style.css';

export const App = () => {
	const [messages, setMessages] = useState([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		fetchMessages();
	}, []);

	const fetchMessages = () => {
		fetch(MESSAGE_URL)
			.then(res => res.json())
			.then(data => {
				const filteredData = data.filter(post => post.message);
				setMessages(filteredData);
				setLoading(false);
			})
			.catch(error => console.error(error));
	};

	const postSingleMessage = (message, name) => {
		fetch(MESSAGE_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: message, name: name }),
		})
			.then(() => fetchMessages())
			.catch(error => console.error(error));
	};

	const postSingleLike = id => {
		fetch(`https://happy-thoughts.herokuapp.com/thoughts/${id}/like`
			//`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`
			, {
			method: 'POST',
			body: '',
			headers: { 'Content-Type': 'application/json' },
		})
			.then(() => fetchMessages())
			.catch(error => console.error(error));
	};

	return (
		<main>
			<PostInput onMessageChange={postSingleMessage} />
			{isLoading ? (
				<Loader className="loader" />
			) : (
				<PostList postList={messages} onLikeChange={postSingleLike} />
			)}
		</main>
	);
};
