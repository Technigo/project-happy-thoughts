import React from 'react';
import { formatDistance } from 'date-fns';
import parseISO from 'date-fns/parseISO';

const HappyThought = ({ thought, handleHeart }) => {
	const timeCreated = formatDistance(parseISO(thought.createdAt), new Date(), {
		addSuffix: true,
	});
	return (
		<div className='thought-container'>
			<p className='thought-message' key={thought._id}>
				{thought.message}
			</p>
			<button
				className={thought.hearts > 0 ? 'heart-btn clicked' : 'heart-btn'}
				onClick={() => handleHeart(thought._id)}
			>
				<span role='img' aria-label='heart'>
					❤️
				</span>
			</button>
			<span className='heart-number'>✕{thought.hearts}</span>
			<p className='time-created'>{timeCreated}</p>
		</div>
	);
};

export default HappyThought;
