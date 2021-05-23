import React from 'react'
import moment from 'moment'

const MessageElement = ({ message, onLikesIncrease }) => {

	return (
		<section className="messages">
			<p>{message.message}</p>
			<div className="info-container">
				<div className="button-container">
					<button 
						className={message.hearts > 0 ? "like-button like-button-clicked" : "like-button" } 
						onClick={() => onLikesIncrease(message._id)}>
						<span className="like-icon" role="img" aria-label="like">❤️</span>
					</button>
				</div>
				<div className="posted">
					<p> x {message.hearts}</p>
					<p>{moment(message.createdAt).fromNow()}</p>
				</div>
			</div> 
		</section>
	)
}

export default MessageElement