import React from 'react'
import Emoji from '../utils/Emoji'
import moment from 'moment' //a function, npm install moment


const ThoughtItem = ({ thought, onLikesIncrease }) => {
    return (
        <div className="thought-container">
            <p>{thought.message}</p>

        

            <div className="likes-container">
                <div className="likes-wrapper">
                <button className="likebtn" onClick={() => onLikesIncrease(thought._id)}>
                {' '}
                <Emoji symbol="❤️" label="heart"/> 
                </button>
                {' '}
                <p className="likes">x {thought.hearts}</p>
                </div>
            

            
                <p className="date">
                    {moment(thought.createdAt).fromNow()}
                </p>
            </div>
        
        </div>
        
    )
}

export default ThoughtItem