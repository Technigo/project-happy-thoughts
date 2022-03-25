import React from 'react';
import moment from 'moment';

const HappyThought = ({ thought, onAddHeart }) => {
	return (
		<div className='thought-container'>
			<p className='thought-message'>{thought.message}</p>
			<button className='heart-button' onClick={() => onAddHeart(thought._id)}>
				♥️
			</button>
			<p className='heart-number'>✕{thought.hearts}</p>
			<p className='time-created'>{moment(thought.createdAt).fromNow()}</p>
		</div>
	);
};

export default HappyThought;
