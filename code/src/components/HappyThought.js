import React from "react"
// import ReactTimeAgo from 'react-time-ago'
import './postedstyle.css'

export const HappyThought = props => {
    const { message, hearts, _id } = props.thought

    const handleClick = () => {
        fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
            method: 'POST',
        })
        .then(() => props.onLiked(_id))
    }

    return (
        <article className='thought'>
            <h3>{message}</h3>
            <p>
                <button
                    onClick={handleClick}>
                    <span role='img' aria-label='Heart' >
                        {" 💘"}
                    </span>
                </button>
                {hearts}
            </p>
        </article>
    )
}