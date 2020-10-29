import React, { useState, useEffect } from 'react';

import PostInput from './PostInput';
import PostList from './PostList';
import { MESSAGE_URL } from '../Urls';
import Loader from './Loader';
import './Style.css';

export const App = () => {
	const [messages, setMessages] = useState([]);
	const [isLoading, setLoading] = useState(true); //to show a loading circle when waiting for the fetch

	useEffect(() => {
		fetchPosts();
		setInterval(fetchPosts, 5000);
	}, []);

	//fetch from backend API (From server to app)
	const fetchPosts = () => {
		fetch(MESSAGE_URL)
			.then(res => res.json())
			.then(data => {
				const filteredData = data.filter(post => {
					return post.message;
				});
				//filteredData.reverse(); //this will make the oldest shown first
				setMessages(filteredData);
				setLoading(false);
			})
			.catch(error => console.error(error));
	};

	//second fetch - when we post our message!
	const postSingleMessage = message => {
		fetch(MESSAGE_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message }),
		})
			.then(() => fetchPosts())
			.catch(error => console.error(error));
	};

	//POST likes
	const postSingleLike = id => {
		fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
			method: 'POST',
			body: '',
			headers: { 'Content-Type': 'application/json' },
		}).then(() => fetchPosts());
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
