import React, { useEffect, useState } from 'react';
import { HappyThought } from './components/HappyThought';
import { HappyForm } from './components/HappyForm';

const url = 'https://joacims-happy-thoughts.herokuapp.com/';

export const App = () => {
	const [thoughts, setThoughts] = useState([])
	const [postedMessage, setPostedMessage] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetch(url)
			.then(res => res.json())
			.then(json => {
				setThoughts(json)
				setLoading(false)
			})
	}, [postedMessage])

	const handleFormSubmit = message => {
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({ message }),
			headers: { 'Content-Type': 'application/json' }
		}).then(() => setPostedMessage(message))
	}

	const onLiked = thoughtId => {
		const updatedThoughts = thoughts.map(thought => {
			if (thought._id === thoughtId) {
				thought.likes += 1
			}
			return thought;
		})
		setThoughts(updatedThoughts);
	}

	return (
		<main>
			<HappyForm onFormSubmit={handleFormSubmit} />
			{thoughts.map(thought => (
				<HappyThought key={thought._id} thought={thought} onLiked={onLiked} />
			))}
		</main>
	);
};
