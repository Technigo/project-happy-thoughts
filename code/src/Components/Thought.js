import React from 'react'
import moment from 'moment'

export const Thought = (props) => {
    return (
        <div className="thought">
            <p className="message">
                {props.message}
            </p>
            <div className="info-wrapper">
                <div className="heart-wrapper">
                    <button 
                        className="heart"
                        onClick={() => props.like(props.id)}>
                        ❤️
                    </button>
                    <div className="heart-counter">
                        x {props.hearts}
                    </div>
                </div>
                <div className="time">
                    {moment(props.createdAt).subtract(10, 'seconds').fromNow()}{//this is to counteract the server/local time difference, otherwise causing new messages to happen "in a few seconds" 
                }</div>
            </div>
        </div>
    )
}

//date format from API:
//"2019-11-21T11:31:28.547Z",

export default Thought