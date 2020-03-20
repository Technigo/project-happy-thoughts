import React from 'react'
import moment from 'moment'
import './postedstyle.css'

export const HappyThought = props => {
    const { message, createdAt, hearts, _id } = props.thought

    const handleClick = () => {
        fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
            method: 'POST',
        })
            .then(() => props.onLiked(_id))
    }

    return (
        <div className='thought'>
            <h3>{message}</h3>
            <div className="footerPost">
            <div className="postedInfo">
                <button tabIndex="0"
                style={hearts > 0 ? { opacity: 0.5 } : { opacity: 1 }}
                    onClick={handleClick}>
                    <span role='img' aria-label='Heart'>
                        {" 💘"}
                    </span>
                </button>
                <span className="howMany">{hearts}</span>
            </div>
            <div className="moment">{moment(createdAt).fromNow()}</div>
            </div>
            
        </div>
    )
}