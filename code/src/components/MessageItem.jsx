import React from "react";
import moment from "moment";

const MessageItem = ({ message, onLikeIncrease }) => {
	return (
		<div>
			<p>{message.message}</p>
			<button onClick={() => onLikeIncrease(message._id)}>
				{" "}
				&hearts; {message.hearts}
			</button>
			{/* <p> x {message.hearts}</p> */}
			<p> - Submitted: {moment(message.createdAt).fromNow()}</p>
		</div>
	);
};

export default MessageItem;
