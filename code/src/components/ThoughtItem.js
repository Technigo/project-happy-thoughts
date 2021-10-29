import React from "react"
import moment from "moment"


const ThoughtItem = ({ thought, onLikesChange }) => {



    return (
        <div className='thought-item'>
            <p className='thought-message'>{thought.message}</p>
            <div className='likesAndTime'>
                <button 
                    onClick={() => onLikesChange(thought._id)} 
                    className='btn'>
                    <span style={{backgroundColor: thought.hearts > 0 ? '#F3B1AF' : '#EAEAEA'}} className='btn-heart' role='img' aria-label='heart emoji'>❤️</span> x {thought.hearts}
                </button>
                <p className='time'>{moment(thought.createdAt).fromNow()}</p>
            </div>
        </div>

    )
}

export default ThoughtItem