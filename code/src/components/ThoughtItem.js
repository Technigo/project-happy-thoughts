import React from "react";
import moment from 'moment'
import './ThoughtItem.css'
import heart from '../assets/heart-icon.png'

const ThoughtItem = ({ onLikesIncrease, thought }) => {
    return (
        <div className="thought-item-container">
            <p className="thought-message">{thought.message}</p>
            <div className="button-date-container">
                <div className="hearts-button-container">
                    <button className="like-button" onClick={() => onLikesIncrease(thought._id)}><img className="heart-icon" src={heart} alt="heart-icon" /></button>
                    <span className="hearts-amount"> x {thought.hearts}</span>
                </div>
                <p className="created-date">
                    {moment(thought.createdAt).fromNow()}
                </p>
            </div>
        </div>
    )
}

export default ThoughtItem