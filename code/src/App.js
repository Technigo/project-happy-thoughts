import React, { useEffect, useState } from 'react'; //use effect and use state hook
import { API_URL, LIKES_URL } from './utils/urls'; //Links to the URLs
import ThoughtCard from './components/ThoughtCard';
import ThoughtForm from './components/ThoughtForm';
import LoadingItem from './components/LoadingItem';
import Header from './components/Header';
import Footer from './components/Footer';

export const App = () => {
	const [thoughts, setThoughts] = useState([]); // thoughts initialized by an empty array
	const [newThought, setNewThought] = useState(''); //state property
	const [loading, setLoading] = useState(false); //state property
	const [name, setName] = useState('');

	//getting the happy thought-posts.
	useEffect(() => {
		fetchThoughts();
	}, []);

	const fetchThoughts = () => {
		setLoading(true);
		//fetching data from API to show the happy thought-posts.
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setThoughts(data))
			.finally(() => setLoading(false));
	};

	const handleFormSubmit = (event) => {
		//Prevents the page from reloading when submit button been pushed.
		event.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: newThought, author: name }), //JSON.stringify converts it to JSON.
		};

		// Get the data and pushes it into the array with posts
		fetch(API_URL, options)
			.then((res) => res.json())
			.then((data) => {
				fetchThoughts();
				setNewThought(''); // This clears the textarea for a new input
				setName('');
			});
	};
	//function that adds 1 like by pressing the heart
	const handleLikesIncrease = (thoughtId) => {
		const options = {
			method: 'POST',
		};

		//Fetches data from the API from the post that has been sent
		fetch(LIKES_URL(thoughtId), options)
			.then((res) => res.json())
			.then((data) => {
				fetchThoughts();
			});
	};
	return (
		<>
			<Header heading="Share your happy Thoughts" />
			<div>
				{/* A spinner that shows when the page loads */}
				{loading && <LoadingItem />}
				{/* A component that receives the users input and makes a new thought-card */}
				<ThoughtForm
					onFormSubmit={handleFormSubmit}
					newThought={newThought}
					setNewThought={setNewThought}
					name={name}
					setName={setName}
				/>
				{/* mapping through the thought array and generating thought-cards */}
				{/* sending data as props to the thought card component */}
				{thoughts.map((thought) => (
					<ThoughtCard
						key={thought._id}
						thought={thought}
						onLikesIncrease={handleLikesIncrease}
					/>
				))}
			</div>
			<Footer />
		</>
	);
};
