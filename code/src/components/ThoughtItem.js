import React from 'react';
import moment from 'moment'; //import outer packages

const ThoughtItem = ({ thought, onLikesIncrease }) => {
	return (
		<div className="thought-container">
			<div className="thought-message">
				<p>{thought.message}</p>
			</div>
			<div className="heart-date-container">
				<p>
					<button
						className="heart-btn"
						onClick={() => onLikesIncrease(thought._id)}
						//the heart-btn background-color depends on the likes or not
						style={{
							backgroundColor: thought.hearts > 0 ? '#FFADAD' : '#EAEAEA',
						}}
					>
						<span role="img" aria-label="Heart emoji">
							&#128151;
						</span>
					</button>
					x {thought.hearts}
				</p>
				<p className="date">{moment(thought.createdAt).fromNow()}</p>
			</div>
		</div>
	);
};

export default ThoughtItem;
