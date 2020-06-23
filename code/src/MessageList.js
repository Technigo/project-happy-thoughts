import React from 'react'
import './MessageListStyle.css'
import moment from 'moment'



export const MessageList = ({ thought, onLiked}) => {
    const {message, hearts, createdAt, _id} = thought

    const handleClick = () => {
        fetch(`https://elins-happythoughts-api.herokuapp.com/thoughts/${_id}/like`, {
            method: 'POST',
            body: '',
            headers: { 'Content-Type': 'application/json' }
        }).then(() => onLiked(_id))

    }

    return (
        <article className="happy-thought-box">
            <h3>{message}</h3>
            <section className="heart-box">
                <button 
                onClick={handleClick}
                className={ hearts > 0 ? 'liked' : 'notLiked'}
                >
                <span role="img" aria-label='hearts'>❤️</span>
                </button>x {hearts} 
                   
            </section> 
            <spna className="time-box">{moment(createdAt).fromNow()}</spna>
        </article>
    )  
}