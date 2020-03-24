import React from 'react'

export const MessageLike = (props) => {
    const { thoughtId, likes } = props
    const MESSAGES_URL = `https://technigo-thoughts.herokuapp.com/${thoughtId}/like`;

    const handleSubmit = event => {
        event.preventDefault();

        fetch(MESSAGES_URL, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: ''
            })
        .then(() => {
            window.location.reload();
        });
    }

    return (
        <form onSubmit={handleSubmit} className='like-container'>
            <button
                type='submit'
                className='like-button'
            >
                <img className='sparkling-heart' src={require('./assets/sparkling-heart.png')} alt='heart'/>
            </button>
            <div className='like-display'>x {likes}</div>
        </form>
    )
}