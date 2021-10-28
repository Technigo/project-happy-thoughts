import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onLikesIncrease }) => {
	return (
		<div className="answer-container">
			<p className="answered-ones">{thought.message}</p>
			<div className="heart-button-and-date">
			<button className="heart-button" onClick={() => onLikesIncrease(thought._id)}>
				{" "}
				💖 x {thought.hearts}
			</button>
			<p className="date">
				- {moment(thought.createdAt).fromNow()}
			</p>
			</div>
	
		</div>
	);
};

export default ThoughtItem;
