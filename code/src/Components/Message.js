import React from 'react';

import moment from 'moment';

const Message = ({ message, created, hearts, id, onLiked }) => {

    const LIKES_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`;
    
    const changeLikes = () => {
        fetch(LIKES_URL,
            {
                method: 'POST',
                body: '',
                headers: {'Content-Type': 'application/json'}
            })
            .then(() => onLiked(id))
    }

    return (
        <article className="message">
            <h3>{message}</h3>
            <div className="message-footer">
                <p className="time-stamp">
                    <button
                        onClick={changeLikes}
                        className={hearts > 0 ? 'likes-button got-likes' : 'likes-button no-likes'}
                    >
                        <span>
                            {'💛'}
                        </span>
                    </button>
                    x {hearts}
                </p>
                <span className="time-stamp">
                    {moment(created).fromNow()}
                </span>
            </div>

        </article>
    )
}

export default Message;