import React, { useEffect, useState } from 'react'

import { API_LIKES, API_URL } from './components/utils/urls'
import { ThoughtInput } from 'components/ThoughtInput'
import { ThoughtList } from 'components/ThoughtList'
import { LoadingSpinner } from 'components/LoadingSpinner'

export const App = () => {
	const [thoughts, setThoughts] = useState([])
	const [newThought, setNewThought] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		fetchThoughts()
	}, [])

	const fetchThoughts = () => {
		setLoading(true)
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setThoughts(data))
			.catch((err) => console.error(error))
			.finally(() => setLoading(false))
	}

	const handleFormSubmit = (e) => {
		e.preventDefault()

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: newThought }),
		}

		fetch(API_URL, options)
		fetchThoughts()
	}

	const handleLikesClick = (thoughtId) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		}

		fetch(API_LIKES(thoughtId), options)
			.then((res) => res.json())
			.then(() => {
				fetchThoughts()
			})
	}

	return (
		<main>
			{loading && <LoadingSpinner />}
			<ThoughtInput
				onFormSubmit={handleFormSubmit}
				newThought={newThought}
				setNewThought={setNewThought}
			/>

			<ThoughtList onLikesClick={handleLikesClick} thoughts={thoughts} />
		</main>
	)
}
