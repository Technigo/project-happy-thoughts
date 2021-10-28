import React from 'react';
import moment from 'moment';
import "../components/ThoughtItem.css"


const ThoughtItem = ({ thought, onLikesIncrease }) => {
	return (
		<div className="thought-form">
			<p >{thought.message}</p>
			<div className="heart-likes-date-container">
			<p className="x-likes">
				<button className="heart-click-button" onClick={() => onLikesIncrease(thought._id)}>
				<span className="emoji" role="img" aria-label="heart">❤️</span>
				</button>
				x {thought.hearts}
			</p>
			<p className="date">
				Created at: {moment(thought.createdAt).fromNow()}
			</p>
		</div>
		</div >
	);
};

export default ThoughtItem;
