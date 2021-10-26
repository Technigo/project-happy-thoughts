import React, { useEffect, useState } from 'react';

import MessageForm from 'components/MessageForm';
import MessageList from 'components/MessageList'

import { API_URL } from './utils/urls';

export const App = () => {
	const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState('');

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setThoughts(data));
	}, []);


  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

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
			.then((data) => setThoughts([data, ...thoughts]));
	};

	return (
    <main>
      <MessageForm 
       newThought={newThought}
       onNewThoughtChange={handleNewThoughtChange} 
       onFormSubmit={onFormSubmit}
      />
      <MessageList 
        thoughts={thoughts}
      />
    </main>
		
	);
};
