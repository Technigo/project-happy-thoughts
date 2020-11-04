import React from 'react';
import moment from "moment";


export const HappyThought = props => {
    const { message, _id } = props.thought

    const handleClick = () => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
            method: 'POST',
            body: '',
            headers: { 'Content-Type': 'application/json' }
        }).then(() => props.onLiked(_id))
    }
    return (
        <article className='happy-thought'>
            <div className="message">{message}</div>
            <div className="thought-footer">
                <p>
                    <div className="likes">
                        <button
                            onClick={handleClick}
                            type="submit"
                            className="like"
                        >
                            <span role='img' aria-label="heart emoji">❤️
                            </span>
                        </button>
                        <div className="total-likes">
                            x {props.thought.hearts}
                        </div></div>
                </p>
                <div className="message-time">
                    <p>{moment(props.thought.createdAt).fromNow()}</p></div>
            </div>
        </article>
    )
}
