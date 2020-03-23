import React from 'react'

export const MessageLike = (props) => {
    const { thoughtId, likes } = props
    const MESSAGES_URL = `https://technigo-thoughts.herokuapp.com/${thoughtId}/like`;

    const handleSubmit = event => {
        event.preventDefault();

        // Send a POST request using the 'message' state
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

    // An inout text field
    // A sumbit button
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='submit'
                className='like-button'
                value='Like'
            ></input>
            <div>x {likes}</div>
        </form>
    )
}