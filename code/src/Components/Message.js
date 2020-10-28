import React from 'react';

import moment from 'moment';

const Message = ({ message, created, hearts, id, whenLiked }) => {

    const LIKES_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`;
    
    // When user clicks heart, posts a like, then run whenLiked-function with current id
    const changeLikes = () => {
        fetch(LIKES_URL,
            {
                method: 'POST',
                body: '',
                headers: {'Content-Type': 'application/json'}
            })
            .then(() => whenLiked(id))
    }

    return (
        <article className="message">
            <h3 className="thought">{message}</h3>
            <div className="message-footer">
                <p className="grey-style">
                    <button
                        onClick={changeLikes}
                        className={hearts > 0 ? 'likes-button got-likes' : 'likes-button no-likes'}
                    >
                        <span>
                            {'❤️'}
                        </span>
                    </button>
                    x {hearts}
                </p>
                <span className="grey-style">
                    {moment(created).fromNow()}
                </span>
            </div>

        </article>
    )
}

export default Message;