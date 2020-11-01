import React from 'react';
import 'components/happyHeart.css';

export const HappyHeart = props => {
    const {hearts, _id} = props.thought

    const handleClick = () => {
        fetch (`https://happy-thoughts-technigo.herokuapp.com/thougts/${_id}/like`, {
            method: 'POST',
            body: '',
            headers: { 'Content-Type': 'application/json' }
        }).then(() => props.onLiked(_id))
    }
    return (
        <article className="happy-heart">
            <p>
                <button 
                onClick={handleClick}
                style={{background: hearts > 0 ? '#ffadad' : '#f3f1f1'}}
                >
                    <span role="img" aria-label='Heart'>
                        {'❤️'}
                    </span>
                </button>
                x {hearts}
            </p>

        </article>
    )
}