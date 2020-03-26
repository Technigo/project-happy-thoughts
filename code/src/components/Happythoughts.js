import React from 'react'
import moment from 'moment'

import 'components/design/messagebox.css'


export const Happythoughts = ({ thought, onLiked}) => {
    const {message, hearts, createdArt, _id} = thought

    const handleClick = () => {
        fetch(`https://technigo-thoughts.herokuapp.com/${_id}Like`, {
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
                className={
                    hearts >5 ? 'superLiked' : hearts > 0 ? 'liked' : 'notLiked'
                }
                >
                <span role='img' aria-label='heart'>
                 💜
                </span>
                </button>
                x {hearts}
            </p>
            <p>{moment(createdArt).fromNow()}</p>
        </article>
    )


    

   
}
