import React from "react";
import moment from "moment";

const MessageItem = ({ messages, onLikeIncrease }) => {
	return (
		<div className="message-container">
			<p className="message">{messages.messages}</p>
			<div className="likes-and-submitted">
				<div className="likes-container">
					<button
						className={messages.hearts === 0 ? "like-button" : "liked-button"}
						onClick={() => onLikeIncrease(messages._id)}
					>
						<span className="heart-span" role="img" aria-label="heart emoji">
							❤️
						</span>
					</button>
					<p> x {messages.hearts}</p>
				</div>
				<div className="submitted-container">
					<p>{moment(messages.createdAt).fromNow()}</p>
				</div>
			</div>
		</div>
	);
};

export default MessageItem;
