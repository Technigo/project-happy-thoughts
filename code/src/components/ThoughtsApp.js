/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from 'react';

import ThoughtsList from './ThoughtsList';
import ThoughtsForm from './ThoughtsForm';

export const ThoughtsApp = () => {
	const [thoughtsList, setThoughtsList] = useState([]);
	const [newMessage, setNewMessage] = useState('');

	useEffect(() => {
		// eslint-disable-next-line no-use-before-define
		fetchThoughts()
		const interval = setInterval(() => {
			fetchThoughts()
			 }, 10000)

			 return () => clearInterval(interval)
	}, []);

	const fetchThoughts = () => {
		fetch('https://project-happy-thoughts-api-rew4wd5yjq-lz.a.run.app/thoughts')
		// fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
			// eslint-disable-next-line arrow-parens
			.then(res => res.json())
			.then((data) => setThoughtsList(data))
			.catch((error) => console.error(error))
			.finally(() => console.log('test'))
	}

	const handleNewMessageChange = (event) => {
		setNewMessage(event.target.value)
	}

	const onFormSubmit = (event) => {
		event.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				message: newMessage
			})
		}

		fetch('https://project-happy-thoughts-api-rew4wd5yjq-lz.a.run.app/thoughts', options)
			// eslint-disable-next-line arrow-parens
			.then(res => res.json())
			.then(() => fetchThoughts())
			.finally(() => setNewMessage(''));
	}
const handleLikeOnClick = (_id) => {
				fetch(`https://project-happy-thoughts-api-rew4wd5yjq-lz.a.run.app/thoughts/${_id}/like`, {
	    method: 'PATCH',
	    headers: { 'Content-Type': 'application/json' }
	})
	     .then((res) => res.json())
	     .then((data) => fetchThoughts(data))
}

	return (
		<div>
			<ThoughtsForm
  newMessage={newMessage}
  onNewMessageChange={handleNewMessageChange}
  onFormSubmit={onFormSubmit} />
			<ThoughtsList
  thoughtsList={thoughtsList}
  setThoughtsList={setThoughtsList}
  handleLikeOnClick={handleLikeOnClick} />
		</div>
	);
};