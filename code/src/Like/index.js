import React from 'react'
import './like.css'

export const Like = ({ hearts }) => {

    return (
        <div className="like-content">
            <div className="heart-circle">
                <i className="fas fa-heart red"></i>
            </div>
            <p className="like-counter">x {hearts}</p>
        </div>
    )
}
