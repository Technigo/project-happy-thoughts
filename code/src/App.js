import React, { useEffect, useState } from 'react';
import moment from 'moment';

const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const App = () => {
	const [allThoughts, setAllThoughts] = useState([]);
	const [newThought, setNewThought] = useState('');

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setAllThoughts(data));
	}, []);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const options = {
			method: 'POST',
			headers: {'Content-Type': 'application/json',},
			body: JSON.stringify({ message: newThought }),
		};

		fetch(API_URL, options)
			.then((res) => res.json())
			.then((newestThought) => setAllThoughts([newestThought, ...allThoughts]));
	};

  const handleNewThought = (e) => {
    setNewThought(e.target.value)
  }

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<label htmlFor="newThought">Type your thought</label>
				<input
					id="newThought"
					type="text"
					value={newThought}
					onChange={handleNewThought}
				/>
				<button type="submit">Send thought!</button>
			</form>

			{allThoughts.map((thought) => (
				<div key={thought._id}>
					<p>{thought.message}</p>
					<button> &hearts; {thought.hearts}</button>
					<p className="date">
						- Created at: {moment(thought.createdAt).fromNow()}
					</p>
				</div>
			))}
		</div>
	);
};
