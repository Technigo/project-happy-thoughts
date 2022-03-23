import React, { useEffect, useState, useRef } from 'react'

import { API_LIKES, API_URL } from './components/utils/urls'
import { ThoughtInput } from 'components/ThoughtInput'
import { ThoughtList } from 'components/ThoughtList'
import { LoadingHeart } from 'components/LoadingSpinner'
import { Hearts } from 'components/Hearts'

export const App = () => {
	const [thoughts, setThoughts] = useState([])
	const [newThought, setNewThought] = useState('')
	const [loading, setLoading] = useState(false)
	const timeoutId = useRef(null) //Used to pass to child

	//Fetch thoughts when only when components get mounthed.
	useEffect(() => {
		fetchThoughts()

		//Clear TimeoutId on component unmounth.
		return () => {
			clearTimeout(timeoutId.current)
		}
	}, [])

	const fetchThoughts = () => {
		setLoading(true)
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setThoughts(data))
			.catch((err) => console.error(err))
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
		setNewThought('')

		//Set timeout in useRef by making a copy in the DOM using .current property.
		timeoutId.current = setTimeout(() => {
			fetchThoughts()
		}, 1000)
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
			{newThought && <Hearts />}
			{loading && <LoadingHeart />}
			<ThoughtInput
				onFormSubmit={handleFormSubmit}
				newThought={newThought}
				setNewThought={setNewThought}
			/>

			<ThoughtList onLikesClick={handleLikesClick} thoughts={thoughts} />
		</main>
	)
}
