import React from 'react'
import moment from 'moment'
import './HappyThought.css'

export const HappyThought = props => {
    const { message, hearts, createdAt, _id } = props.props

    console.log(props)

    const handleClick = () => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
            method: "POST",
            body: "",
            headers: { "content-Type": "application/json" }
        }).then(() => props.onLiked(_id))
    }

    return (
        <article className='happy-thought'>
            <h3>{message}</h3>
            <p>
                <button
                    onClick={handleClick}
                    style={{ background: hearts > 0 ? '#ffadad' : '#f3f1f1  ' }}
                >
                    <span role='img' aria-label='Heart'>
                        {'♥️ '}
                    </span>
                </button>
                x {hearts}
            </p>
            <span className='message-time'>
                {moment(createdAt).fromNow()}
            </span>
        </article>
    )



}