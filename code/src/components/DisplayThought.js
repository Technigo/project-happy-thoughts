import React from 'react';
import moment from 'moment';

export const DisplayThought = ({ message, hearts, date }) => {
	return (
		<section className="thought-container">
			<p>{message}</p>
			<div className="icon-container">
				<div>
					<button className="heart-button">
						<span className="heart" role="img" aria-label="Red heart">
							❤️
						</span>
					</button>
					<span className="amount-of-hearts">x {hearts}</span>
				</div>
				<span className="time-gone-by">{moment(date).fromNow()}</span>
			</div>
		</section>
	);
};

// {moment(date)}
