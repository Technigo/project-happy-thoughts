import React from 'react';
import moment from 'moment'; //import outer package moment.js

//passing the props gathered from the App.js
const ThoughtCard = ({ thought, onLikesIncrease }) => {
	return (
		<div className="thought-container">
			<div className="thought-message">
				{/* displaying thought message */}
				<p>{thought.message}</p>
			</div>
			<div className="heart-date-container">
				<p>
					<button
						className="heart-btn"
						onClick={() => onLikesIncrease(thought._id)}
						//the heart-btn background-color change depends on the likes or not
						style={{
							backgroundColor: thought.hearts > 0 ? '#FFADAD' : '#EAEAEA',
						}}
					>
						<span role="img" aria-label="Heart emoji">
							&#10084;&#65039;
						</span>
					</button>
					x {thought.hearts}
				</p>
				{/* Using the Moment.js to display when the happy thought was posted */}
				<p className="date">{moment(thought.createdAt).fromNow()}</p>
			</div>
		</div>
	);
};

export default ThoughtCard;
