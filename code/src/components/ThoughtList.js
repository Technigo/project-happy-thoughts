import React from "react";
import moment from "moment";

export const ThoughtList = ({ onLikesClick, thoughts }) => {
	return (
		<div className="thoughts-container">
			{thoughts.map((thought) => (
				<div key={thought._id}>
					<p>{thought.message}</p>
					<button onClick={() => onLikesClick(thought._id)}>
						&hearts;{thought.hearts}
					</button>
					<p>created at: {moment(thought.createdAt).fromNow()}</p>
				</div>
			))}
		</div>
	);
};
