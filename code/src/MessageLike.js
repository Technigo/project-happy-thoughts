import React, { useState, useEffect } from 'react'

export const MessageLike = (props) => {
    const { thoughtId, likes } = props
    const MESSAGES_URL = `https://technigo-thoughts.herokuapp.com/${thoughtId}/like`;
    const [amountLikes, setAmountLikes] = useState(likes);
    const [myLikes, setMyLikes] = useState(+localStorage.getItem(thoughtId) || 0);

    const clickHandler = () => {
        fetch(MESSAGES_URL, 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'}, 
                body: ''
            })
        setAmountLikes(amountLikes + 1);
        localStorage.setItem(thoughtId, myLikes + 1);
        setMyLikes(myLikes + 1);
    }

    return (
        <section className='like-container'>
            <button
                type='button'
                className='like-button'
                onClick={clickHandler}
            >
                <img className='sparkling-heart' src={require('./assets/sparkling-heart.png')} alt='heart'/>
            </button>
            <div className='like-display'>x {amountLikes} (you've given {myLikes} love{myLikes > 1 ? 's' : null})</div>
        </section>
    )
}