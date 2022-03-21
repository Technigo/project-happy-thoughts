import React, {useState, useEffect} from 'react'
import { /*formatRelative,*/ subDays, formatDistance } from 'date-fns';

const thoughtsAPI = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const App = () => {
	const [thoughts, setThoughts] = useState([])

	useEffect(() => {
		fetch(thoughtsAPI)
			.then(res => res.json())
			.then(json => setThoughts(json))
	}, [])

	return (
		
		<div className='all-thoughts'>
			{thoughts.map((thought) => (
				<div key={thought._id} className='thought'>
					<h2 className='thought-header'>{thought.message}</h2>
					<p>Likes: {thought.hearts}</p>
					{/* <p>Posted: {formatRelative(subDays(new Date(thought.createdAt), 3), new Date())}</p> */}
					<p>Posted: {formatDistance(subDays(new Date(thought.createdAt), 3), new Date(), { addSuffix: true })}</p>
				</div>
			))}
		</div>
	)
};
