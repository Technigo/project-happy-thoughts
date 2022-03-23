import React from 'react'

import Heart from '../assets/heart.png'

export const ThoughtInput = ({ onFormSubmit, newThought, setNewThought }) => {
	// if (newThought.length < 5){
	// 	{input= backgroundColor: 'pink'}
	// }

	const checkKey = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			onFormSubmit(e)
		}
	}

	return (
		<form onSubmit={onFormSubmit}>
			<div className='input-container'>
				<label>What's making you happy right now?</label>
				<textarea
					className={newThought.length > 140 ? 'red-text' : ''}
					name='newThought'
					type='text'
					rows='5'
					columns='150'
					placeholder='...'
					value={newThought}
					onKeyDown={(e) => checkKey(e)}
					onChange={(e) => {
						setNewThought(e.target.value)
					}}
				></textarea>
				<div className='input-container--details'>
					<button
						className='send-btn'
						disabled={newThought.length < 5 || newThought.length > 140}
						type='submit'
					>
						<img src={Heart} alt='heart-icon' className='heart-icon' /> Send
						Happy Thought{' '}
						<img src={Heart} alt='heart-icon' className='heart-icon' />
					</button>
					<div className='characters'>{140 - newThought.length}/140</div>
				</div>
			</div>
		</form>
	)
}
