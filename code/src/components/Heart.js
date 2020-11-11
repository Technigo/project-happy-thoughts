import React from 'react'

import './heart.css'

export const Heart = ({ text, styled, onClick }) => {
    return (
        <button className={styled} type="submit" onClick={onClick}>
            {styled === 'heart__btn' && <span><img className="heart__btn-icon" src='./heart.png' alt='Heart icon' />{text}<img className="heart__btn-icon" src='./heart.png' alt='Heart icon' /></span>}
            {styled === 'heart__like' && <img className="heart__btn-icon" src='./heart.png' alt='Heart icon' />}
        </button>
    )
}