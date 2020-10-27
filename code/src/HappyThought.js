import React, { useState } from 'react'
import moment from 'moment'
import './HappyThought.css'


export const HappyThought = props => {
    const { message, createdAt, _id } = props.props
    const [hearts, setHearts] = useState(props.props.hearts)

    const onLiked = () => {
        setHearts(hearts + 1)
    }

    const handleClick = () => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
            method: "POST",
            headers: { "content-Type": "application/json" }
        }).then(() => onLiked())
    }

    return (
        <div className="happy-container">
            <article className='happy-thought'>
                <h3>{message}</h3>
                <div className="thought-details">
                    <div className="likes">
                        <button className="btn"
                            onClick={handleClick}
                            style={{ background: hearts > 0 ? '#ffadad' : '#f3f1f1  ' }}
                        >
                            <span className="heart" role='img' aria-label='Heart'>
                                {'♥️  '}
                            </span>
                        </button>
                        <span> x {hearts}</span>
                    </div>
                    <span className='message-time'>
                        {moment(createdAt).fromNow()}
                    </span>
                </div>
            </article>
        </div>
    )
}