import React from 'react'
import moment from 'moment'

import Heart from '../assets/heart.png'

export const ThoughtList = ({ onLikesClick, thoughts }) => {
	return (
		<div className='thoughts-container'>
			{thoughts.map((thought) => (
				<div className='thoughts-container--item' key={thought._id}>
					<p className='message-text'>{thought.message}</p>
					<div className='input-container--details'>
						<div className='likes-container'>
							<button
								className={thought.hearts > 0 ? 'like-btn liked' : 'like-btn'}
								onClick={() => onLikesClick(thought._id)}
							>
								<img
									src={Heart}
									alt='heart-icon'
									className='heart-icon likes'
								/>
							</button>
							<p className='like-counter'> x{thought.hearts}</p>
						</div>
						<p className='date-text'>{moment(thought.createdAt).fromNow()}</p>
					</div>
				</div>
			))}
		</div>
	)
}
