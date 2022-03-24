import React, { useState, useEffect } from 'react';

import HappyThought from 'components/HappyThought';
import SendThought from 'components/SendThought';
import { API_URL, LIKES_API_URL } from 'urls/api';

export const App = () => {
	const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState('');
	const [loading, setLoading] = useState(true);
	const [typing, setTyping] = useState(false);

	useEffect(() => {
		refreshThoughts();
	}, []);

	const refreshThoughts = () => {
		setLoading(true);
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				setThoughts(data);
			})
			.finally(() => setLoading(false));
	};

	return <>{!loading && <HappyThought thoughts={thoughts} />}</>;
};
