import React, { useEffect, useState } from 'react';

import { NewPost } from './components/NewPost';
import Posts from './components/Posts';
import LoadingScreen from './components/LoadingScreen';

import { API_URL, LIKES_URL } from './utils/urls';

export const App = () => {
	const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchThoughts();
	}, []);

	// Fetching 20 latest thoughts
	const fetchThoughts = () => {
		setLoading(true);
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setThoughts(data))
			.finally(() => setLoading(false));
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: newThought }),
		};

		fetch(API_URL, options)
			.then((res) => res.json())
			.then((data) => {
				fetchThoughts();
				setNewThought('');
			});
	};

	const onLikesIncrease = (thoughtId) => {
		const options = {
			method: 'POST',
		};

		fetch(LIKES_URL(thoughtId), options)
			.then((res) => res.json())
			.then((data) => {
				fetchThoughts();
			});
	};

	return (
		<div>
			{loading && <LoadingScreen />}

			<NewPost
				onFormSubmit={onFormSubmit}
				newThought={newThought}
				setNewThought={setNewThought}
			/>

			<Posts thoughts={thoughts} onLikesIncrease={onLikesIncrease} />
		</div>
	);
};
