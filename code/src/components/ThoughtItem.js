import React from 'react';
import moment from 'moment'; //import outer packages

const ThoughtItem = ({ thought, onLikesIncrease }) => {
	return (
		<div className="thought-container">
			<div className="thought-message">
				<p>{thought.message}</p>
			</div>
			<div className="heart-date-container">
				<p class="heart-btn">
					<button onClick={() => onLikesIncrease(thought._id)}>
						{' '}
						&hearts;{thought.hearts}
					</button>
				</p>
				<p className="date">{moment(thought.createdAt).fromNow()}</p>
			</div>
		</div>
	);
};

export default ThoughtItem;
