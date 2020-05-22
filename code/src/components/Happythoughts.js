import React from 'react'
import moment from 'moment'

import 'components/design/messagebox.css'


export const Happythoughts = ({ thought, onLiked}) => {
    const {message, heart, createdAt, _id} = thought

    const handleClick = () => {
        fetch(`https://ebbabw-project-happy-thoughts.herokuapp.com/thoughts/${_id}/like`, {
            method: 'POST',
            body: '',
            headers: { 'Content-Type': 'application/json' }
        }).then(() => onLiked(_id))

    }

    return (
        <article className="thoughtBox">
            <h3>{message}</h3>
            <p>
                <button 
                onClick={handleClick}
                className={ heart + 1 ? 'liked' : 'notLiked'}
                >
                <span role="img" aria-label='hearts'>❤️</span>
                </button> x {heart} 
            </p> 
            <spna className="creadtedAt-text">{moment(createdAt).fromNow()}</spna>
        </article>
    )  
}
