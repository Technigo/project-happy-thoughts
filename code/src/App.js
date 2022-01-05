import React, { useEffect, useState } from 'react';

import ThoughtForm from './components/ThoughtForm';
import ThoughtItem from './components/ThoughtItem';
import LoadingItem from './components/Loading';

import { API_URL, LIKES_URL } from './utils/urls';


export const App = () => {
	const [thoughts, setThoughts] = useState([]); //state with list of thoughts
	const [newThought, setNewThought] = useState(''); //state to keep track of new thoughts being typed in the input field
	const [loading, setLoading] = useState(false); //loading icon



//basic useEffect hook to make a getRequest to get all of the thought when the app is mounted
	useEffect(() => {
		fetchThoughts();
	}, []);

	const fetchThoughts = () => {
		setLoading(true);
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setThoughts(data))
			.finally(() => setLoading(false));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', 
			},
			body: JSON.stringify({ message: newThought }), //
		};

		fetch(API_URL, options) //option is needed otherwise is going to be getMetod
			.then((res) => res.json())
			.then((data) => {

				fetchThoughts();
				setNewThought(''); //clear inputfield after sumbitting thought

			});
	};

	//function that handles increase of likes and fetch the unique URL. And this should be a POST request.
	const handleLikesIncrease = (thoughtId) => { 
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
			<LoadingItem />
			{loading && <LoadingItem />}
			<ThoughtForm
				onFormSubmit={handleFormSubmit}
				newThought={newThought}
				setNewThought={setNewThought}
			/>

			{thoughts.map((thought) => ( //code responsible to display all thoughts
				<ThoughtItem
					key={thought._id}
					thought={thought}
					onLikesIncrease={handleLikesIncrease}
				/>
			))}
		</div>
	);
};
