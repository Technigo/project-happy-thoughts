import React from 'react'
import { useState } from 'react'
import moment from 'moment'
import { FaTrashAlt } from 'react-icons/fa';

const ThoughtItem = ({ thought, onLikeSubmit, id, onDeleteThought }) => {
    const [clicks, setClicks] = useState(0)
    const [yourPreviousLikes, setYourPreviousLikes] = useState(JSON.parse(localStorage.getItem(id)) + 0)
    const [color, setColor] = useState("eaeaea");

    const onIncreaseClicks = (id) => {
        setClicks(clicks + 1)
        onLikeSubmit(id)
        setColor("#ffadad")
        setYourPreviousLikes((oldState) => oldState + 1)
        localStorage.setItem(id, JSON.stringify(yourPreviousLikes + 1))
    }

    return (
        <div className="thought-card">
            <p className="thought-title">{thought.message}</p>
            <div className="like-time-container">
                <div className="likes-amount-container">
                    <button onClick={() => onIncreaseClicks(thought._id)} className="unliked-heart" style={{ backgroundColor: color }}>
                        <span aria-label="heart" role="img" className="heart">❤️</span>
                    </button>
                    <p className="likes-counter"> x {thought.hearts}</p>
                </div>
                <p className="date">{moment(thought.createdAt).fromNow()}</p>
            </div>
            <div className="additional-info">
                <p className="likes-counter"> you liked this thought {yourPreviousLikes} {yourPreviousLikes > 1 ? "times" : "time"}</p>
                <button className="button-delete" onClick={() => onDeleteThought(thought._id)}><FaTrashAlt /></button>
            </div>
        </div >
    )
}

export default ThoughtItem