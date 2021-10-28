import React from 'react'
import { useState } from 'react'
import moment from 'moment'

const ThoughtItem = ({ thought, onLikeSubmit }) => {
    const [clicks, setClicks] = useState(0)

    const onIncreaseClicks = (id) => {
        setClicks(clicks + 1)
        onLikeSubmit(id)
    }
    return (
        <div className="thought-card">
            <p className="thought-title">{thought.message}</p>
            <div className="like-time-container">
                <div className="likes-amount-container">
                    <button onClick={() => onIncreaseClicks(thought._id)} className={thought.hearts > 0 ? 'liked-heart' : 'unliked-heart'}>
                        <span aria-label="heart" role="img" className="heart">❤️</span>
                    </button>
                    <p className="likes-counter"> x {thought.hearts}</p>
                </div>
                <p className="date">{moment(thought.createdAt).fromNow()}</p>
            </div>
            <p className="likes-counter"> you liked this thought {clicks} {clicks > 1 ? "times" : "time"}</p>
        </div >
    )
}

export default ThoughtItem