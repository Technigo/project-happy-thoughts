import React, { useState, useEffect } from 'react';
import { SendThought } from './SendThought';
import { DisplayThought } from './DisplayThought';

export const App = () => {
	const [ thoughts, setThoughts ] = useState([]);

	useEffect(() => {
		fetch('https://technigo-thoughts.herokuapp.com/').then((res) => res.json()).then((json) => setThoughts(json));
	}, []);

	return (
		<React.Fragment>
			<SendThought />
			{thoughts.map((thought) => (
				<DisplayThought
					id={thought._id}
					message={thought.message}
					hearts={thought.hearts}
					date={thought.createdAt}
				/>
			))}
		</React.Fragment>
	);
};
