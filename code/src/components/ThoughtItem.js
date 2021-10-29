import React from "react";
import moment from "moment";

export const ThoughtItem = ({ thought, onLikesIncrease }) => {
	return (
		<div className="thought-container">
			<p className="thoughts-messages">{thought.message}</p>
			<div className="info-text-container">
				<button className="like-btn" onClick={() => onLikesIncrease(thought._id)}>
					{/*prettier-ignore*/}
					<div
						className={
							thought.hearts > 0
							? "heart-icon-container clicked"
							: "heart-icon-container"
						}>
						<span role="img" className="heart-icon" aria-label="heart icon">
							❤️
						</span>
					</div>
					<span className="like-counter"> x {thought.hearts}</span>
				</button>
				<p className="time-info">{moment(thought.createdAt).fromNow()}</p>
			</div>
		</div>
	);
};
