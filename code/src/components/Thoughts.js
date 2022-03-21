import React, {useState, useEffect} from 'react'
import { /*formatRelative,*/ formatDistance } from 'date-fns';
import parseISO from 'date-fns/parseISO';

import Button from './Button'

const thoughtsAPI = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

const Thoughts = ({heartIcon}) => {
	const [thoughts, setThoughts] = useState([])

	useEffect(() => {
		fetch(thoughtsAPI)
			.then(res => res.json())
			.then(json => setThoughts(json))
	}, [])

    return (
        <div>
			{thoughts.map((thought) => (
				<div key={thought._id} className='thought card'>
					<h2 className='thought-header'>{thought.message}</h2>
                    <div className='likes-container'>
                        <Button 
                            message={heartIcon}
                            className={'like-button'}
                            // imgSrc={'assets/heart.png'}
                        />
                        <p className='number-of-likes'> x {thought.hearts}</p>
                    </div>
					{/* <p>Posted: {formatRelative(subDays(new Date(thought.createdAt), 3), new Date())}</p> */}
					<p className='posted-date'>{formatDistance(parseISO(thought.createdAt), new Date(), { addSuffix: true })}</p>
				</div>
			))}
		</div>
    )
}

export default Thoughts;
