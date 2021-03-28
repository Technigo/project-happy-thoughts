import React from 'react'
import moment from 'moment'

const ThoughtElement = ({thought, onLikesIncrease}) => {
    return(
        <>
            <div className="previous-thoughts-container">
                <p className="previous-thoughts-text">{thought.message}</p>
                <div className="likes-time-container">
                    <div className="likes-button-container">
                        <button className="likes-button" onClick={() => onLikesIncrease(thought._id)}>
                            <p className="heart"><span role="img" aria-label="heart-emoji">❤️</span></p>
                        </button>
                        <p className="background-info">    x {thought.hearts}</p>
                    </div>    
                    <p className="background-info">{moment(thought.createdAt).fromNow()}</p>
                </div>
            </div>
        </>
    )
}

export default ThoughtElement