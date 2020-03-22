import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { SendThought } from './SendThought';
import { DisplayThought } from './DisplayThought';

export const App = () => {
	const [ thoughts, setThoughts ] = useState([]);

	useEffect(() => {
		fetch('https://technigo-thoughts.herokuapp.com/').then((res) => res.json()).then((json) => setThoughts(json));
	}, []);

	return (
		<React.Fragment>
			<Header />
			<SendThought thoughts={thoughts} setThoughts={setThoughts} />
			{thoughts.map((thought) => (
				<DisplayThought
					key={thought._id}
					id={thought._id}
					message={thought.message}
					hearts={thought.hearts}
					date={thought.createdAt}
				/>
			))}
		</React.Fragment>
	);
};
