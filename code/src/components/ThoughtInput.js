import React from 'react'

import Heart from '../assets/heart.png'

export const ThoughtInput = ({ onFormSubmit, newThought, setNewThought }) => {
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
					<div>
						<div>
							{' '}
							{newThought.length > 0 && newThought.length < 5 && (
								<p className='error'>Minimum: 5 characters</p>
							)}
							{newThought.length > 140 && (
								<p className='error'>Maximum: 140 characters</p>
							)}
						</div>
						<div className='characters'>
							Characters left: {140 - newThought.length}
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}
