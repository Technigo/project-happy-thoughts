import React from 'react';
import moment from 'moment';

const HappyThought = ({ thoughts, onAddHeart }) => {
	return thoughts.map((thought) => {
		return (
			<div key={thought._id}>
				<p>{thought.message}</p>
				<button onClick={() => onAddHeart(thought._id)}>❤</button>
				<p>x {thought.hearts}</p>
				<p>{moment(thought.createdAt).fromNow()}</p>
			</div>
		);
	});
};

export default HappyThought;
