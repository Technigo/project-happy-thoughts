import React from 'react';
import { useState, useEffect } from 'react';

import HappyThought from 'components/HappyThought';
import SendThought from 'components/SendThought';

export const Main = () => {
	const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState('');

	const handleNewThought = (event) => {
		setNewThought(event.target.value);
	};

	useEffect(() => {
		fetchThoughts();
	}, []);

	const fetchThoughts = () => {
		fetch('https://lisen-project-thoughts.herokuapp.com/thoughts')
			.then((res) => res.json())
			.then((json) => setThoughts(json));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: newThought }),
		};

		fetch('https://lisen-project-thoughts.herokuapp.com/thoughts', options)
			.then((res) => res.json())
			.then(() => fetchThoughts())
			.finally(() => setNewThought(''));
	};

	const handleHeart = (_id) => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		};

		fetch(
			`https://lisen-project-thoughts.herokuapp.com/thoughts/${_id}/like`,
			options
		)
			.then((res) => res.json())
			.then(() => fetchThoughts());
	};

	return (
		<div className='container'>
			<SendThought
				onFormSubmit={handleFormSubmit}
				newThought={newThought}
				onSetThoughtChange={handleNewThought}
			/>
			{thoughts.map((thought) => (
				<HappyThought
					key={thought._id}
					thought={thought}
					handleHeart={handleHeart}
				/>
			))}
		</div>
	);
};
