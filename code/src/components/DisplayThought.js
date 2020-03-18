import React from 'react';
import ReactTimeAgo from 'react-time-ago';

export const DisplayThought = ({ id, message, hearts, date }) => {
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
				<span className="time-gone-by">
					<ReactTimeAgo date={date} />
				</span>
			</div>
		</section>
	);
};
