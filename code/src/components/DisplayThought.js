import React from 'react';
import moment from 'moment';
import { HeartButtons } from './HeartButtons';

export const DisplayThought = ({ id, message, hearts, date }) => {
	return (
		<section className="thought-container">
			<p>{message}</p>
			<div className="icon-container">
				<HeartButtons hearts={hearts} id={id} />
				<span className="time-gone-by">{moment(date).fromNow()}</span>
			</div>
		</section>
	);
};
