import React from 'react'
import moment from 'moment'
import { formatDistance } from 'date-fns'

import Heart from '../assets/heart.png'
import BrokenHeart from '../assets/brokenheart.png'

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
									src={thought.hearts > 0 ? Heart : BrokenHeart}
									alt='heart-icon'
									className='heart-icon likes'
								/>
							</button>
							<p className='like-counter'> x{thought.hearts}</p>
						</div>
						<p className='date-text'>
							{formatDistance(new Date(thought.createdAt), Date.now(), {
								addSuffix: true,
							})}
							{/* {moment(thought.createdAt).fromNow()} */}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}
