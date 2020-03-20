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
        <article className='thought'>
            <h3>{message}</h3>
            <div className="footerPost">
            <div className="postedInfo">
                <button
                // style={hearts > 0 ? { backgroundColor: "#eae3e8" } : { backgroundColor: "#fff" }}
                    onClick={handleClick}>
                    <span role='img' aria-label='Heart'>
                        {" 💘"}
                    </span>
                </button>
                <span className="howMany">{hearts}</span>
            </div>
            <div className="moment">{moment(createdAt).fromNow()}</div>
            </div>
            
            {/* <span className="moment">{moment(createdAt).fromNow()}</span> */}
        </article>
    )
}